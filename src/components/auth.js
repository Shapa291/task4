import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const socialMediaAuth = (provider) => {
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
        return res.user;
    })
    .catch((er) => {
        return er;
    })
};

export default socialMediaAuth