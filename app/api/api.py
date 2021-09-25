import time
from flask import Flask
from firebase_admin import credentials, firestore, initialize_app

# Initialize Flask app
app = Flask(__name__)

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
plants_ref = db.collection('plants')
users_ref = db.collection('users')
images_ref = db.collections('images')

# Test Route
@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}


# Add Plant
@app.route('/add_plant', methods=['POST'])
def add_plant():
  params = {
    'plant_name': request.get_json().get('plant_name'),
    'gardener': request.get_json().get('gardener')
  }

  return gardener.get_json()
  

# Trending Plants - returns the 5 plants with the most upvotes
@app.route('/trending', methods=['GET'])
def get_trending_plants():
  query = plants_ref.order_by('upvotes', 'DESCENDING').limit(5)
  return query.get()