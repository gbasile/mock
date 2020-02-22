const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.serveJSON = functions.https.onRequest((request, response) => {
  let matches = request.path.split("/");
  let domain = matches[1];
  let endpoint = matches[2];

  authenticate(domain, request)
    .catch(err => {
      response.status(401).send(err);
    })
    .then(() => {
      return getJSON(domain, endpoint);
    })
    .then(json => {
      response.json(json);
    })
    .catch(err => {
      response.status(404).send(err);
    });
});

function getJSON(domainName, endpointName) {
  return new Promise(function(resolve, reject) {
    getEndpointRef(domainName, endpointName)
      .get()
      .then(doc => {
        let string = doc.data()["json"];
        let json = JSON.parse(string);
        resolve(json);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function authenticate(domainName, request) {
  return new Promise(function(resolve, reject) {
    getDomainDocRef(domainName)
      .get()
      .then(doc => {
        if (!doc.exists) {
          // doc does not require auth
          resolve();
        }

        let domain_api_key = doc.data()["api_key"];
        if (domain_api_key == null) {
          // doc does not require auth
          resolve();
        }

        let authorization = request.headers.authorization;
        if (authorization == null) {
          reject("Authorization required, but no api_key found in the request");
        }

        let api_key = authorization.split("api_key ")[1];
        if (api_key != domain_api_key) {
          reject("Invalid API Key");
        }

        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getDomainDocRef(domainName) {
  return admin
    .firestore()
    .collection("domains")
    .doc(domainName);
}

function getEndpointRef(domainName, endpointName) {
  return getDomainDocRef(domainName)
    .collection("endpoints")
    .doc(endpointName);
}
