
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCG0tufCiwDsr_j5fQ3GR1huQ5NjG383wY",
  authDomain: "intern-app-009.firebaseapp.com",
  projectId: "intern-app-009",
  storageBucket: "intern-app-009.appspot.com",
  messagingSenderId: "1073165826117",
  appId: "1:1073165826117:web:62725b7eba536e8aec8b2c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const storage = getStorage(app);

export { app, auth ,storage };
