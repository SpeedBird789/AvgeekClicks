// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain, 
//   projectId:process.env.REACT_APP_projectId, 
//   storageBucket:process.env.REACT_APP_storageBucket, 
//   messagingSenderId:process.env.REACT_APP_messagingSenderId, 
//   appId:process.env.REACT_APP_appId, 
// };

const firebaseConfig = {
  apiKey: "AIzaSyAlP4YMdf6xtjcmrBnfPSUwpLw600HNJDY",
  authDomain: "independent-service-prov-374f1.firebaseapp.com",
  projectId: "independent-service-prov-374f1",
  storageBucket: "independent-service-prov-374f1.appspot.com",
  messagingSenderId: "769821978245",
  appId: "1:769821978245:web:8a7c9cc76edcd2185a03ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;