import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuyin-7yfNpX3ZqJpzscVFElGoOh4kr4Q",
  authDomain: "recipe-app-82b1c.firebaseapp.com",
  projectId: "recipe-app-82b1c",
  storageBucket: "recipe-app-82b1c.appspot.com",
  messagingSenderId: "202121225534",
  appId: "1:202121225534:web:5e54019bf5e0e7a309b86f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    navigate("/");

    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
  }
};
