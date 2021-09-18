import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const socialMediaAuth = async (provider) => {

    try {
        const res = await firebase
            .auth()
            .signInWithPopup(provider);
        return res.user;
    } catch (er) {
        return er;
    }
};

export default socialMediaAuth