import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBodAFEHiquSOCkZ0tFySV5Ti-uJVUuxWM",
    authDomain: "savetweets-1fe70.firebaseapp.com",
    projectId: "savetweets-1fe70",
    storageBucket: "savetweets-1fe70.appspot.com",
    messagingSenderId: "1015205095937",
    appId: "1:1015205095937:web:06e54dbd9b0d0208012e00",
    measurementId: "G-9MVW5H6BLH"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;