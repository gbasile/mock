const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.serveJSON = functions.https.onRequest((request, response) => {
    let matches = request.path.split('/')
    let domain = matches[1]
    let endpoint = matches[2]

    admin.firestore()
        .collection('domains')
        .doc(domain)
        .collection('endpoints')
        .doc(endpoint)
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