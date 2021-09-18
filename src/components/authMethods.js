import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const gitHubProvider = new firebase.auth.GithubAuthProvider();