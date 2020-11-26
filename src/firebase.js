import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBO70w2xXMcsX2_W93u35quTSFDXO3cCEM",
  authDomain: "twitter-clone-7c4e2.firebaseapp.com",
  databaseURL: "https://twitter-clone-7c4e2.firebaseio.com",
  projectId: "twitter-clone-7c4e2",
  storageBucket: "twitter-clone-7c4e2.appspot.com",
  messagingSenderId: "301277729114",
  appId: "1:301277729114:web:85c7c1523aba5e1974a363",
  measurementId: "G-RBFF82KE77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
