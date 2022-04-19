import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9AjZAhhqmQ9Ml4jdT9M-EqdGUfptLqXM",
    authDomain: "restaurant-nativeapp.firebaseapp.com",
    projectId: "restaurant-nativeapp",
    storageBucket: "restaurant-nativeapp.appspot.com",
    messagingSenderId: "815202405270",
    appId: "1:815202405270:web:d96905c5938978330bebb7",
    measurementId: "G-8VH4RYKHRS"
};

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
            app.firestore().settings({ experimentalForceLongPolling: true });
        }
        this.db = app.firestore();
    }
}

const firebase = new Firebase();

export default firebase;