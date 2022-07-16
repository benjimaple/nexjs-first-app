// Import the functions you need from the SDKs you need
import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_KEY,
  authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
  projectId:process.env.FIRE_BASE_PROJECT_ID, 
  storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_BASE_SENDER_ID,
  appId: process.env.FIRE_BASE_APP_ID,
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// export const fireStore = firebase.getFire