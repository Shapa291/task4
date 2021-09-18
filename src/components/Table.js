import React, { useContext , useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import 'firebase/compat/firestore';
import { getDatabase, ref, update, onValue} from "firebase/database";
import СhangeNetwork from './increment';
import 'firebase/compat/auth';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter';
import '../App.css'


const Tablee = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const [selectedUsers, setSelectedUser] = useState([])

    const database = getDatabase();

    СhangeNetwork(user.providerData[0].providerId)
    console.log(user);
    const userRef = ref(database, 'users')

    let eMail = (user.providerData[0].providerId).split('@')[0]
    if (user.email == null )
        {
           eMail = (user.providerData[0].providerId).split('.')[0] + ' user'; 
           update(ref(database, 'users/' +  user.uid), {
            name: eMail,
            email: eMail,
            status: "active"
        })
        }
        else if (user.displayName == null){
      update(ref(database, 'users/' +  user.uid), {
        name: eMail,
        email: user.email,
        uid: user.uid,
        socialNetwor: user.providerData[0].providerId,
        date_of_reg: user.metadata.creationTime,
        date_of_last: user.metadata.lastSignInTime,
        status: "active "
    })
    } else
     update(ref(database, 'users/' +  user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        socialNetwor: user.providerData[0].providerId,
        date_of_reg: user.metadata.creationTime,
        date_of_last: user.metadata.lastSignInTime,
        status: "active"
    }) 

    onValue(userRef, (snapshot) => {
        if (!snapshot.exists(user.uid)){
        } 
    })

    const data = []
     const dbRef = ref(database, 'users');
     onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
           const val = childSnapshot.val();
           data.push(val)
        })
    })

    const result = Object.values(data).map(v => Object.values(v))

    const selectOptions = {
      0: 'yahoo.com',
      1: 'google.com',
      2: 'github.com'
    };

    const columns = [
        
        { dataField: 'uid', text: 'Id', sort: true },
        { dataField: 'name', text: 'Name',sort: true },
        { dataField: 'email', text: 'Email', sort: true },
        { dataField: 'socialNetwor', text: 'SocialNetwork',sort: true, filter: textFilter()},
        { dataField: 'date_of_reg', text: 'Date of Reg' ,sort: true},
        { dataField: 'date_of_last', text: 'Date of last in',sort: true },
        { dataField: 'status', text: 'Status', sort: true , filter: textFilter()},
      ];

      const selectRow = {
        mode: 'checkbox',
        clickToSelect: true
      };

      const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];

    console.log(selectedUsers);
        return (
            <div className = 'tablee'>
                <div className = 'toolbarrr' class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary">Left</button>
                  <button type="button" class="btn btn-primary">Middle</button>
                  <button type="button" class="btn btn-primary">Right</button>
                  <input type="text" placeholder="UID" ></input>
            </div>
                <BootstrapTable keyField='uid' data={data}  columns={columns} defaultSorted={ defaultSorted } filter={ filterFactory() }  selectRow={ selectRow } />
             </div>
        );
}

export default Tablee;