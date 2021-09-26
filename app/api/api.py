import time
from flask import Flask, request, abort
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


###
# Plant Routes
@app.route('/plant', methods=['POST'])
def plant():
  plant = Plant.from_dict(request.get_json())
  plant_ref = plants.document()
  # Update the ID now that we have it
  plant.id = plant_ref.id
  plant_ref.set(vars(plant))

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


@app.route('/plants/<grower>', methods=['GET'])
def grower_plants(grower):
  desired_plants = plants.where(u'grower', '==', f'{grower}').stream()
  
  ret = {}
  for plant in desired_plants:
    ret[plant.id] = plant.to_dict()
  
  return ret


@app.route('/trending/<number>', methods=['GET'])
def trending(number):
  # TODO: For some reason this doesn't seem to work properly
  query = plants.order_by(u'upvotes', direction=firestore.Query.DESCENDING).limit(number)
  results = query.get()

  ret = {}
  for result in results:
    ret[result.id] = result.to_dict()

  return ret
