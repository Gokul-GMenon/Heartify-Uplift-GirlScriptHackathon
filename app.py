from flask import Flask,request,jsonify
import pickle
import numpy as np



app = Flask(__name__)

def model_2(data):

    import json
    import pickle


    """ To convert the json file into dictionary """
    
    if type(data) != dict:
        data = json.load(data)    
    
    categories = ['age', 'anaemia', 'creatinine_phosphokinase', 'diabetes', 'ejection_fraction', 'high_blood_pressure', 'platelets', 'serum_creatinine', 
                'serum_sodium', 'sex', 'smoking']

    # anaemia
    if data[categories[1]].lower() == 'yes':
        data[categories[1]] = 1
    else:
        data[categories[1]] = 0

    # diabetes

    if data[categories[3]].lower() == 'high':
        data[categories[3]] = 1
    else:
        data[categories[3]] = 0

    # high blood pressure
    if data[categories[5]].lower() == 'yes':
        data[categories[5]] = 1
    else:
        data[categories[5]] = 0

    # sex
    if data[categories[9]].lower() == 'male':
        data[categories[9]] = 1
    else:
        data[categories[9]] = 0
        

    # smoking
    if data[categories[-1]].lower() == 'yes':
        data[categories[-1]] = 1
    else:
        data[categories[-1]] = 0



    classifier = []
    import numpy as np
    

    with open("heart_failure_model.pkl", 'rb') as file:
        classifier = pickle.load(file)

        
    test = np.array([[data[categories[0]], data[categories[1]], data[categories[2]], data[categories[3]], data[categories[4]], data[categories[5]], 
                    data[categories[6]], data[categories[7]], data[categories[8]], data[categories[9]], data[categories[10]] ]])

 
    prediction = classifier.predict(test)

    return prediction

data = {
	'age':75, 
	'anaemia':'no', 
	'creatinine_phosphokinase':582, 
	'diabetes':'low', 
	'ejection_fraction':20, 
	'high_blood_pressure':'yes', 
	'platelets':265000, 
	'serum_creatinine':1.9, 
	'serum_sodium':130, 
	'sex':'male', 
	'smoking':'no'
	}

@app.route('/',methods=['GET'])
def predict():
    model = model_2(data)
    final = jsonify(prediction = str(model))
    return final


if __name__ == "__main__":
    app.run(debug=True)