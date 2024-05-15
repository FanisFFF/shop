// Import the functions you need from the SDKs you need

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwfArZiZnCgVMyer0l2ZYTJweB50ImRKY",
  authDomain: "shop-7caec.firebaseapp.com",
  projectId: "shop-7caec",
  storageBucket: "shop-7caec.appspot.com",
  messagingSenderId: "571874972244",
  appId: "1:571874972244:web:a1afd4211507594f3493c1",
};
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const auth = getAuth();
auth.useDeviceLanguage();
export async function getUser() {
  const data = getAuth().currentUser;
  console.log(data);
  return data;
}
export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

// export const createUserDocumentFromAuth = async (userAuth) => {
//   const userDocRef = doc(db, "users", userAuth.id);
//   console.log(userDocRef);
//   const userSnapshot = await getDoc(userDocRef);
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return userDocRef;
// };

export const signInWithGooglePopUp = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
export const SignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const createWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;
  const userEmail = userCredential.user.email;
  const date = new Date();
  console.log(userCredential);
  await setDoc(doc(db, "users", user.uid), { userEmail, date });
};

export const signInWithPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
