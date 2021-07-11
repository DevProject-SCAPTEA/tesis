import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAO2OSNe-Qi1nDxxyBMmJukbMLYO1K-yvw",
  authDomain: "scaptea.firebaseapp.com",
  projectId: "scaptea",
  storageBucket: "scaptea.appspot.com",
  messagingSenderId: "801072828959",
  appId: "1:801072828959:web:181a7241ad201426b53b2a",
  measurementId: "G-PZV294DSD0",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
