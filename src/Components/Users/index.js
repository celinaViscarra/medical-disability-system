import React, {useEffect, useState} from 'react';
import TableU from './FormU';
import {db} from '../../Firebase';
import {toast}  from 'react-toastify';

const Users = () => {

  const [values, setValues] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEdit = async (valueObject) => {
        await db.collection('users').doc().set(valueObject); 
        toast('New Disability Added', {type:'success'});
        //'users' indica la colección donde se almacenan los datos
    };

    const onDelete = async (id) => { //for delete a value
      if(window.confirm('Are you sure to delete this?')){
        await db.collection('users').doc(id).delete();
        toast('Disability Deleted Succesfully', {type:'error'});
      }
    };



    const getData = async () => {
      db.collection('users').onSnapshot((querySnapshot) =>{
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
      <TableU {...{addOrEdit, currentId, values}}/>
      <div>
        {values.map(value => (
          <div className="card mb-1" key={value.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h2>ID: {value.id}</h2>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-info btn-sm">
                  <i title="Edit Employee" className="material-icons" onClick={() => setCurrentId(value.id)}>create</i>
                  </button>
                <button type="button" className="btn btn-danger btn-sm">
                  <i title="Delete Employee" className="large material-icons" onClick={() =>
                  onDelete(value.id)}>close</i>
                  </button>
                </div>
                </div>
              <h3>Name: {value.name}</h3>
              <h5>Last Name: {value.lastname}</h5>
              </div>
            </div>
        )
          )}
      </div>
    </div>
    );
}

export default Users;