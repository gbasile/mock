const functions = require('firebase-functions');
const express = require('express');
const app = express();

var serviceAccount = require("./firebase-admin.json");
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

app.get('/hello', (req, res) => { res.send("Hello from Firebase!"); });

exports.app = functions.https.onRequest(app);