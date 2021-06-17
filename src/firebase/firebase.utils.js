import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrgpbJqznzfZGU2KQ9-mXw0R2O3K04-2M",
    authDomain: "e-commerce-db-d2ee1.firebaseapp.com",
    projectId: "e-commerce-db-d2ee1",
    storageBucket: "e-commerce-db-d2ee1.appspot.com",
    messagingSenderId: "725268820549",
    appId: "1:725268820549:web:2857c5673d7fb47204e92c",
    measurementId: "G-5VPZMBCJVK"
};
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
