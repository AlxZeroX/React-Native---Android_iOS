import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


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
        }
        this.db = app.firestore();
        this.storage = app.storage();
    }
}
 

 
const  firebase =new Firebase();



export default firebase;