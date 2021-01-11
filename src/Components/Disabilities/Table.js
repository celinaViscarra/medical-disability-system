import React, {useState, useEffect} from 'react';
import '../../App.scss';
import { db } from '../../Firebase';
import Navbar from '../NavBar/Navbar';

const Table = (props) => {
    const [values, setValues] = useState([]);

    const getData = async () => {
      db.collection('md').orderBy("dui", "asc").onSnapshot((querySnapshot) =>{
        const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id:doc.id });
      });
      console.log(docs);
      setValues(docs);
      });
    };

    useEffect(() => {
      getData();
    }, []);


    return (
      <div>
        <Navbar/>
      <form className="card card-body">
        <div>
          
          {values.map(value => (
            <div className="card mb-1" key={value.id}>
              <div className="card-body">
                <h2>Employee DUI: {value.dui}</h2>
                <h3>Responsable Doctor: {value.doctor}</h3>
                <h5>Med Area: {value.medarea}</h5>
                <h6>Start date: {value.start}</h6>
                <h6>Finish date: {value.finish}</h6>
                </div>
                </div>
          )
            )}
        </div>
       </form>
       </div>
    );
  }

export default Table;