def model_1(data):

    import json
    import pickle


    """ To convert the json file into dictionary """
    # data = json.load(data)    
    
    categories = ['age', 'resting bp', 'cholestrol', 'fasting blood sugar', 'max heart rate', 'exercise induced anigna', 'sex', 'chest pain type', 
                'st slope', 'st depression']

    model_to_select = 2

    if data[categories[2]] != '':

        if data[categories[-1]] != -1:
            model_to_select = 1
        else:
            model_to_select = 3

    # blood sugar
    if data[categories[3]] == 'high':
        data[categories[3]] = 1
    else:
        data[categories[3]] = 0

    # exercise induced anigna
    if data[categories[5]] == 'yes':
        data[categories[5]] = 1
    else:
        data[categories[5]] = 0

    # cholestrol (with custom values)
    if data[categories[2]] != '':
        if data[categories[2]] == 'high':
            data[categories[2]] = 230
        elif data[categories[2]] == 'low':
            data[categories[2]] = 170

    # sex
    if data[categories[6]] == 'male':
        data[categories[6]] = 1
    else:
        data[categories[6]] = 0

    # Heart rate
    if data[categories[4]] == 'high':
        data[categories[4]] = 160
    elif data[categories[4]].lower() == 'normal':
        data[categories[4]] = 140
    elif data[categories[4]].lower() == 'low':
        data[categories[4]] = 90

    # st slope
    if data[categories[-2]] != '':

        if data[categories[-2]] == 'flat':
            data[categories[-2]] = 1
        else:
            data[categories[-2]] = 0
        
    #  chest pain type
    if data[categories[-3]].lower() == 'non anignal':
        data[categories[-3]] = [0,1,0]
    elif data[categories[-3]].lower() == 'typical':
        data[categories[-3]] = [0,0,1]
    elif data[categories[-3]].lower() == 'atypical':
        data[categories[-3]] = [1,0,0]


    classifier = []
    import numpy as np
    from sklearn.preprocessing import StandardScaler
    if model_to_select == 1:
        
        with open('models_1\model-all-attributes(noECG)-83-percent.pkl', 'rb') as file:
            classifier = pickle.load(file)

        
        test = np.array([[data[categories[0]], data[categories[1]], data[categories[2]], data[categories[3]], data[categories[4]], data[categories[5]], data[categories[-1]], data[categories[-4]], data[categories[-3]][0], data[categories[-3]][1], data[categories[-3]][2], data[categories[-2]]]])

        st = StandardScaler()

        test[:, :7] = st.fit_transform(test[:, :7])

        prediction = classifier.predict(test)

        return prediction

    elif model_to_select == 2:

        with open('models_1\model-(no cholestrol, st-depression, resting-bp)-attributes(noECG)-82-percent.pkl', 'rb') as file:
            classifier = pickle.load(file)  

        test = np.array([[data[categories[0]], data[categories[3]], data[categories[4]], data[categories[5]], data[categories[-4]], data[categories[-3]][0], data[categories[-3]][1], data[categories[-3]][2], data[categories[-2]] ]])

        st = StandardScaler()

        test[:, :7] = st.fit_transform(test[:, :7])

        prediction = classifier.predict(test)

        return prediction
  

    elif model_to_select == 3:

        with open('models_1\model-(st-depression, st_slope_flat)-attributes(noECG)-79-percent.pkl', 'rb') as file:
            classifier = pickle.load(file)

        test = np.array([[data[categories[0]], data[categories[1]], data[categories[2]], data[categories[3]], data[categories[4]], data[categories[5]], data[categories[-4]], data[categories[-3]][0], data[categories[-3]][1], data[categories[-3]][2] ]])

        st = StandardScaler()

        test[:, :7] = st.fit_transform(test[:, :7])

        prediction = classifier.predict(test)

        return prediction
