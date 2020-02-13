const functions = require('firebase-functions');
const express = require('express');
const app = express();
const serviceAccount = require("./firebase-admin.json");
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mock-a50e1.firebaseio.com"
});

app.get('/mocks', (req, res) => { 
    admin.firestore()
    .collection('mocks')
    .doc('test')
    .get()
        .then((doc) => {
            res.send(doc.data())
        })
        .catch((err) => {
            res.send(err)
        });
});

app.get('/mock/:path', (req, res) => {
    admin.firestore()
        .collection('mocks')
        .doc(req.params['path'])
        .get()
        .then((doc) => {
            var string = doc.data()['json']
            var json = JSON.parse(string)
            res.json(json)
        })
});

app.get('/hello', (req, res) => { res.send("Hello from Firebase!"); });

exports.app = functions.https.onRequest(app);