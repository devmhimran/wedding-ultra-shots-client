import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMrk2vjZG4XvWrtO4pC30u3NroIIhGa5k",
  authDomain: "wedding-ultra-shots.firebaseapp.com",
  projectId: "wedding-ultra-shots",
  storageBucket: "wedding-ultra-shots.appspot.com",
  messagingSenderId: "124659740036",
  appId: "1:124659740036:web:aedd4f52e0721bfe5ac1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;