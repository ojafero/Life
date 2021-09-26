import numpy as np
import cv2
import matplotlib.pyplot as plt
import csv
import os
import numpy as np
import pandas as pd

import seaborn as sns

from time import time
import random

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.layers import Conv2D, MaxPooling2D
from tensorflow.keras.models import Model
from keras.callbacks import EarlyStopping

from tensorflow.python.keras.preprocessing.image import array_to_img
from keras.preprocessing import image
from keras.utils.vis_utils import plot_model
from tensorflow.keras.layers import experimental


img_height = 224
img_width = 224

img_dir = "apple_leaf.jpg"

img = tf.keras.preprocessing.image.load_img(
    img_dir, grayscale=False, color_mode="rgb", target_size=(img_width,img_height), interpolation="nearest"
)
x = image.img_to_array(img)
x = np.expand_dims(x, axis =0)
images = np.vstack([x])

dict = {
    0:'Apple___Apple_scab',
    1:'Apple___Black_rot',
    2:'Apple___Cedar_apple_rust',
    3:'Apple___healthy',
    4:'Cherry_(including_sour)___Powdery_mildew',
    5:'Cherry_(including_sour)___healthy',
    6:'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    7:'Corn_(maize)___Common_rust_',
    8:'Corn_(maize)___Northern_Leaf_Blight',
    9:'Corn_(maize)___healthy',
    10:'Grape___Black_rot',
    11:'Grape___Esca_(Black_Measles)',
    12:'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    13:'Grape___healthy',
    14:'Peach___Bacterial_spot',
    15:'Peach___healthy',
    16:'Pepper,_bell___Bacterial_spot',
    17:'Pepper,_bell___healthy',
    18:'Potato___Early_blight',
    19:'Potato___Late_blight',
    20:'Potato___healthy',
    21:'Strawberry___Leaf_scorch',
    22:'Strawberry___healthy',
    23:'Tomato___Bacterial_spot',
    24:'Tomato___Early_blight',
    25:'Tomato___Late_blight',
    26:'Tomato___Leaf_Mold',
    27:'Tomato___Septoria_leaf_spot',
    28:'Tomato___Spider_mites Two-spotted_spider_mite',
    29:'Tomato___Target_Spot',
    30:'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    31:'Tomato___Tomato_mosaic_virus',
    32:'Tomato___healthy'
}

model2 = tf.keras.models.load_model('CNN_model_2.h5')

preds = model2.predict(images, batch_size = 100)
predictedClass = np.argmax(preds, axis=1)
predictedClass = np.vectorize(dict.get)(predictedClass)

Plant = predictedClass[0].split('___')[0]
Status = predictedClass[0].split('___')[1]
Probability = np.max(preds)

print(f"Plant: {Plant}, Status: {Status}, Probability: {Probability}" )