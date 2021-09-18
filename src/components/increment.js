import firebase from 'firebase/compat/app';
import React, { useContext } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, update, onValue} from "firebase/database";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';


const СhangeNetwork = (provider) => {

const db = firebase.firestore()
const increment = firebase.firestore.FieldValue.increment(0.25)
const socialRef = db.collection('SOCIAL').doc('Network')

const {auth} = useContext(Context)
const [user] = useAuthState(auth)

const database = getDatabase();
const userRef = ref(database, 'users')

onValue(userRef, (snapshot) => {
    if (!snapshot.exists(user.uid)){
        if (provider === 'google.com') socialRef.update({Google : increment})
if (provider === 'yahoo.com') socialRef.update({Yahoo : increment})
if (provider === 'github.com') socialRef.update({Github : increment})
    } 
})

}

export default СhangeNetwork;