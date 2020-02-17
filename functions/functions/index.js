const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.serveJSON = functions.https.onRequest((request, response) => {
    let docId = request.path.substring(1)
    admin.firestore()
        .collection('mocks')
        .doc(docId)
        .get()
        .then((doc) => {
            var string = doc.data()['json']
            var json = JSON.parse(string)
            response.json(json)
        })
        .catch((err) => {
            response.send(err)
        });
})