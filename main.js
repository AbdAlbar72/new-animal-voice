function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            const classifier = ml5.soundClassifier('YourTeachableMachineModelLink/model.json', modelReady);

            function modelReady() {
                console.log('Model is ready!');
                classifier.classify(gotResults);
            }
            function gotResults(error, results) {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log('Got result:', results);
            }
        })
        .catch(function (error) {
            console.error('Error accessing the microphone:', error);
        });
}
