// Import the functions you need from the SDKs you need
import { create } from 'domain';
import {FirebaseApp, initializeApp, } from 'firebase/app';
// import {firebase} fom 'firebase/'
import {getAuth, createUserWithEmailAndPassword, UserCredential} from 'firebase/auth';
import { firebaseConfig } from './environment';


// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

const   app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default  function createUser(email: string, password: string ): Promise<UserCredential> { 
  return  createUserWithEmailAndPassword(auth, email, password);
} 


// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// export const fireStore = firebase.getFire