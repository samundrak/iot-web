import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDY2PP-iIxcFVucO8wfp9whwKHcYYlI7GU",
  authDomain: "nodemcu-dht22-f04ad.firebaseapp.com",
  databaseURL: "https://nodemcu-dht22-f04ad-default-rtdb.firebaseio.com",
  projectId: "nodemcu-dht22-f04ad",
  storageBucket: "nodemcu-dht22-f04ad.appspot.com",
  messagingSenderId: "698884784877",
  appId: "1:698884784877:web:5dd1b0ce535a455cc2c2e4",
  measurementId: "G-L8Y8MZVWB6",
};

firebase.initializeApp(firebaseConfig);
export const firebasedb = firebase.database();
