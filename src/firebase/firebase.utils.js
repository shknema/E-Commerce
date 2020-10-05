import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_MrcBaT2dG12FCQ8vDQmEoIx1BmuLl2g",
    authDomain: "e-commerce-udemy-db.firebaseapp.com",
    databaseURL: "https://e-commerce-udemy-db.firebaseio.com",
    projectId: "e-commerce-udemy-db",
    storageBucket: "e-commerce-udemy-db.appspot.com",
    messagingSenderId: "549677932951",
    appId: "1:549677932951:web:a30d9bb6374919a9fae4d2",
    measurementId: "G-JHLCB7L3GW"
};

export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;