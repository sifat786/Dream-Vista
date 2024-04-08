import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHp4cekZqArrrnAorCjYOsI_CHvUCaRcc",
  authDomain: "dream-vista.firebaseapp.com",
  projectId: "dream-vista",
  storageBucket: "dream-vista.appspot.com",
  messagingSenderId: "388087819435",
  appId: "1:388087819435:web:997a0b6b4693b1d3519bee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;