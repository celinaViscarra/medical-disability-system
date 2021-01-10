import React, {useState, useEffect} from 'react';
import '../../App.scss';
import { db } from '../../Firebase';
import Navbar from '../NavBar/Navbar';

const TableEmployees = (props) => {
    const [values, setValues] = useState([]);

    const getData = async () => {
      db.collection('employees').onSnapshot((querySnapshot) =>{
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
                <h4>Name: {value.name}</h4>
                <h5>Last Name: {value.lastname}</h5>
                <h6>DUI: {value.dui}</h6>
                <h6>Date: {value.date}</h6>
                <h6>Job Position: {value.jobposition}</h6>
                <h6>Genre: {value.genre}</h6>
                </div>
                </div>
          )
            )}
        </div>
       </form>
       </div>
    );
  }

export default TableEmployees;