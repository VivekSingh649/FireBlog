import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKGb9Vh-YP0J5UUmF_9F07Z8pmleepddQ",
  authDomain: "fireblog-d6ba9.firebaseapp.com",
  projectId: "fireblog-d6ba9",
  storageBucket: "fireblog-d6ba9.appspot.com",
  messagingSenderId: "156777861483",
  appId: "1:156777861483:web:cf0f25d5cfc980674cbc2e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { auth, database, storage };
