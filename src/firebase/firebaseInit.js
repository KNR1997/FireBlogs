import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYxBL48xBkU__3_xVnd-5cSgtWjb4m85g",
  authDomain: "fireblogsvue-3f211.firebaseapp.com",
  projectId: "fireblogsvue-3f211",
  storageBucket: "fireblogsvue-3f211.appspot.com",
  messagingSenderId: "195166539619",
  appId: "1:195166539619:web:531fe68d7a3eec48398d56",
  measurementId: "G-2W9R2J8YYG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// timeStamp

export const auth = getAuth(firebaseApp);