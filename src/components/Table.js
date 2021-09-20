import React, { useContext , useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import 'firebase/compat/firestore';
import { getDatabase, ref, update, onValue, remove} from "firebase/database";
import 'firebase/compat/auth';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterFactory, {  textFilter } from 'react-bootstrap-table2-filter';
import '../App.css'
import { signOut } from "firebase/auth";


const Tablee = () => {

    const {auth} = useContext(Context)
    let [user] = useAuthState(auth)
    const database = getDatabase();
  
    let eMail = (user.providerData[0].providerId).split('@')[0]
    if (user.email == null )
        {
           eMail = (user.providerData[0].providerId).split('.')[0] + ' user'; 
           update(ref(database, 'users/' +  user.uid), {
            socialNetwor: user.providerData[0].providerId,
            uid: user.uid,
            date_of_reg: user.metadata.creationTime,
            date_of_last: user.metadata.lastSignInTime,
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
        status: "active"
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

    const [data, setData] = useState([]);

    useEffect(() => {
      const reference = ref(database, 'users/')
      onValue(reference, snapshot => {
        const fetchData = []
        snapshot.forEach(el => {
          fetchData.push(el.val())
        })
        setData(fetchData)
      })
    }, [database])

    
    let userTableData = []

    function pushData(userUid) {
      userTableData.push(userUid)
    }

    function sliceData(userUid) {
      const  index = userTableData.indexOf(userUid)
      userTableData.splice(index, 1)
    }

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
        clickToSelect: true, 
        hideSelectAll: true,
        onSelect: (row, isSelect,) => {
          if (isSelect) pushData(row.uid);
          if (!isSelect) sliceData(row.uid);
          console.log(userTableData);
        },
      };

      const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];
      
      const onBan = (props) => {
          for (let i = 0; i < props.length; ++i){
          { 
           if(props[i] === user.uid) signOut(auth)
            update(ref(database, 'users/' +  props[i]), {
              status: "ban"
          })
          }
        }
      };
      const onDisban = (props) => {
          for (let i = 0; i < props.length; ++i){
            update(ref(database, 'users/' +  props[i]), {
              status: "active"
          }) 
        }
      };

      const onDelete = (props) => {
        for (let i = 0; i < props.length; ++i){
          
          remove(ref(database, 'users/' +  props[i])) 
          if(props[i] === user.uid) signOut(auth)
      }        
      };
    

        return (
          <div className="tablee">

            <button className="toolbar-btn" type="submit"  onClick={function(){onDelete(userTableData)}}>
              Delete
            </button>
            <button className="toolbar-btn" type="submit"  onClick={function(){onBan(userTableData)}}>
              Ban
            </button>
            <button className="toolbar-btn" type = "button"  onClick={function(){onDisban(userTableData)}}>
              Disban
            </button>

          <BootstrapTable
            keyField="uid"
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            filter={filterFactory()}
            selectRow={selectRow}
          />
        </div>
        );
}

export default Tablee;