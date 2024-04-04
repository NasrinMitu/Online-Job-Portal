import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCUy2LsNBddWsR0gF31p1vOd2KzMNL2fE0",
  authDomain: "online-job-portal-f3f31.firebaseapp.com",
  projectId: "online-job-portal-f3f31",
  storageBucket: "online-job-portal-f3f31.appspot.com",
  messagingSenderId: "384681637633",
  appId: "1:384681637633:web:99b7cffc05924853900d00",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}; 
