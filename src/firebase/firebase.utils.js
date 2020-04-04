import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKAUDMNri01krUpmyOEsqVthEpKK95Irk",
  authDomain: "e-commerce-729f1.firebaseapp.com",
  databaseURL: "https://e-commerce-729f1.firebaseio.com",
  projectId: "e-commerce-729f1",
  storageBucket: "e-commerce-729f1.appspot.com",
  messagingSenderId: "90476808051",
  appId: "1:90476808051:web:b634ed599aa8cd0473a706",
  measurementId: "G-B9MHY22ELD"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
