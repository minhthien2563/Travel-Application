// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDp6p25dLH3G7vE2BmONN_DfeYkXygcuNA',
  authDomain: 'travel-application-d3f9a.firebaseapp.com',
  projectId: 'travel-application-d3f9a',
  storageBucket: 'travel-application-d3f9a.appspot.com',
  messagingSenderId: '766492372285',
  appId: '1:766492372285:web:419c0da97644b0abf8a954',
  measurementId: 'G-EL807HB7KD',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
