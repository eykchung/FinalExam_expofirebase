import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBzM0cK0KeLvC0GErM9uKPOohM4QNRwMUI",
    authDomain: "ux-308--final-exam.firebaseapp.com",
    databaseURL: "https://ux-308--final-exam-default-rtdb.firebaseio.com",
    projectId: "ux-308--final-exam",
    storageBucket: "ux-308--final-exam.appspot.com",
    messagingSenderId: "833680484048",
    appId: "1:833680484048:web:c1a29561c510102864a0d5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };