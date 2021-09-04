import numpy as np
from flask import Flask,Request
import pickle as pk

model=pk.load(open("'../heart_failure_model.pkl",'rb'))


def predict():
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

