const config = require("./firebase-admin.json");

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebase.firestore().settings({timestampsInSnapshots: true})
  firebaseCache = firebase
  return firebase
}

export default getFirebase
