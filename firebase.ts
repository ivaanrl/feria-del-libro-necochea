//import firebase from 'firebase';
//
//if (typeof window !== 'undefined' && !firebase.apps.length) {
//  firebase.initializeApp({
//    apiKey: process.env.apiKey,
//    authDomain: process.env.authDomain,
//    databaseURL:process.env.databaseURL,
//    projectId: process.env.projectId,
//    storageBucket: process.env.storageBucket,
//    messagingSenderId: process.env.messagingSenderId,
//    appId: process.env.appId,
//    measurementId: process.env.measurementId,
//  });
//  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
//}

export const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL:process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}

//export { firebase };
