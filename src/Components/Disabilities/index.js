import React, {useEffect, useState} from 'react';
import TableMed from './FormMed';
import {db} from '../../Firebase';
import {toast}  from 'react-toastify';
import Navbar from '../NavBar/Navbar';


const Med = () => {

    const [values, setValues] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEdit = async (valueObject) => {
      try {
        if (currentId === '') {
          await db.collection('md').doc().set(valueObject); 
          toast('New Disability Added', {type:'success'});
        } else {
          await db.collection('md').doc(currentId).update(valueObject);
          toast('Disability Updated Successfully', {type:'info'});
        }
          setCurrentId('');
      } catch (error) {
        console.error(error);
      }
          //'employees' indica la colección donde se almacenan los datos
      };

    const onDelete = async (id) => { //for delete a value
      if(window.confirm('Are you sure to delete this?')){
        await db.collection('md').doc(id).delete();
        toast('Disability Deleted Succesfully', {type:'error'});
      }
    };

    const getData = async () => {
      db.collection('md').onSnapshot((querySnapshot) =>{
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


    return(
      <div>
        <Navbar/>
        <TableMed {...{addOrEdit, currentId, values}}/>

        <div>
          {values.map(value => (
            <div className="card mb-1" key={value.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h2>Employee DUI: {value.dui}</h2>
                  <div className="btn-group" role="group" aria-label="Basic example">
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
                <h3>Responsable Doctor: {value.doctor}</h3>
                <h5>Med Area: {value.medarea}</h5>
                <h6>Start date: {value.start}</h6>
                <h6>Finish date: {value.finish}</h6>
                </div>
              </div>
          )
            )}
        </div>
      </div>
    );
}

export default Med;