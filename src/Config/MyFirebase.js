import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDGj8wdV12KZARi4YtxDZ7tE_ix_CPUNcU",
  authDomain: "cc-mylab-2.firebaseapp.com",
  projectId: "cc-mylab-2",
  storageBucket: "cc-mylab-2.appspot.com",
  messagingSenderId: "907379912748",
  appId: "1:907379912748:web:5943bce1aeda0c03eca189",
  measurementId: "G-CZPXTTFKPK"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
