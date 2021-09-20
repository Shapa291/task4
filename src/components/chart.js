import { PieChart, Pie,  Tooltip } from 'recharts';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React,{useState,useEffect} from 'react';

const ChartBox = () => {

    const db = firebase.firestore();
    
    const [info ,setInfo] = useState([])

      const fetchInfo = async () => {
      const response = db.collection('SOCIAL')
      const data = await response.get()
      data.docs.forEach(item => {
        setInfo([...info, item.data()])
      })
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    let dataInfo = info[0]
    try {
    var google = dataInfo.Google
    var yahoo = dataInfo.Yahoo
    var github = dataInfo.Github
    } catch {

    }
  


    const data01 = [
        { name: 'Google', value: google },
        { name: 'Yahoo', value: yahoo },
        { name: 'Github', value: github },
      ];

    return (
        <div>
            <PieChart width={400} height={400}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="30%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
    )
}

export default ChartBox