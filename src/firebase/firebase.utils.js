import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBYkf_swaxBixIrtKVylTlBnJW_-7m-bO8",
    authDomain: "snapps-wears.firebaseapp.com",
    projectId: "snapps-wears",
    storageBucket: "snapps-wears.appspot.com",
    messagingSenderId: "964813135746",
    appId: "1:964813135746:web:c019569ba8b8f35b34799b",
    measurementId: "G-NTB8V90TT1"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){

        const  {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log("EROR",error.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;