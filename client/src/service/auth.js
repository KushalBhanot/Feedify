import firebase from '../config/firebase-config';

const googleAuth = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user;
        })
        .catch((error) => {
            return error;
        })
}

export default googleAuth;