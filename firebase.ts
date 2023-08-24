import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx9yNLtieWpg-jxJAzZVVLe0O9jAlQyJk",
  authDomain: "blog-nextjs-new.firebaseapp.com",
  projectId: "blog-nextjs-new",
  storageBucket: "blog-nextjs-new.appspot.com",
  messagingSenderId: "164186313599",
  appId: "1:164186313599:web:23de6fa6624a9679f4004a",
  measurementId: "G-L7NHCVHYT2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);