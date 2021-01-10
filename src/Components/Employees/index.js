import React, {useEffect, useState} from 'react';
import TableE from './FormE';
import {db} from '../../Firebase';
import {toast}  from 'react-toastify';
import Navbar from '../NavBar/Navbar';


const Employee = () => {

  const [values, setValues] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addOrEdit = async (valueObject) => {
    try {
      if (currentId === '') {
        await db.collection('employees').doc().set(valueObject); 
        toast('New Employee Added', {type:'success'});
      } else {
        await db.collection('employees').doc(currentId).update(valueObject);
        toast('Employee Updated Successfully', {type:'info'});
      }
        setCurrentId('');
    } catch (error) {
      console.error(error);
    }
        //'employees' indica la colección donde se almacenan los datos
    };

    const onDelete = async (id) => { //for delete a value
      if(window.confirm('Are you sure to delete this?')){
        await db.collection('employees').doc(id).delete();
        toast('Disability Deleted Succesfully', {type:'error'});
      }
    };

    const getData = async () => {
      db.collection('employees').onSnapshot((querySnapshot) =>{
        const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id:doc.id });
      });
      setValues(docs);
      });
    };

    useEffect(() => {
      getData();
    }, []);

    
    return(
      <div>
        <Navbar/>
      <TableE {...{addOrEdit, currentId, values}}/>

      <div>
        {values.map(value => (
          <div className="card mb-1" key={value.id}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h3>ID: {value.id}</h3>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary btn-sm" > 
                    <i title="Add Disability" className="material-icons">add</i>
                    </button>
                    <button type="button" className="btn btn-info btn-sm">
                    <i title="Edit Employee" className="material-icons" onClick={() => 
                      setCurrentId(value.id)}>create</i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                    <i title="Delete Employee" className="large material-icons" onClick={() =>
                    onDelete(value.id)}>close</i>
                    </button>
                  </div>
                </div>
              <h4>Name: {value.name}</h4>
              <h5>Last Name: {value.lastname}</h5>
              <h6>DUI: {value.dui}</h6>
              <h6>Date: {value.date}</h6>
              <h6>Job Position: {value.jobposition}</h6>
              <h6>Genre: {value.genre}</h6>
            </div>
          </div>
        ))};
      </div>
    </div>
    );
}

export default Employee;