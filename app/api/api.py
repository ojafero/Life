import time
from flask import Flask, request
from firebase_admin import credentials, firestore, initialize_app
from objects.plant import Plant

# Initialize Flask app
app = Flask(__name__)

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
plants = db.collection('plants')
images = db.collections('images')

# Test Route
@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}


# Plant Routes
@app.route('/plant', methods=['POST'])
def plant():
  plant = Plant.from_dict(request.get_json())
  plant_ref = plants.document()
  plant.id = plant_ref.id
  # Update the ID now that we have it
  plant_ref.set(vars(plant))

  # Indicate this grower is now in charge of another plant
  plants.document(u'growers_plants').set({plant.id: vars(plant)})

  return vars(plant)

@app.route('/plant/<id>', methods=['GET', 'PUT'])
def plant_id(id):
  plant_ref = plants.document(f'{id}')
  if request.method == 'GET':
    plant = plant_ref.get()
    if plant.exists:
      return plant.to_dict()
    else: 
      abort(404)
  else:
    plant = plant_ref.get()
    if not plant.exists:
      abort(404)
      return

    # Merge json objects
    plant_ref.update(request.get_json())
    plant = plant_ref.get()
    return plant.to_dict()


@app.route('/trending', methods=['GET'])
def trending():
  query = plants_ref.order_by('upvotes', 'DESCENDING').limit(5)
  return query.get()