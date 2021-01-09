import React, {useEffect, useState} from 'react';
import TableMed from './TableMed';
import {db} from '../../Firebase'

const Med = () => {

    const [values, setValues] = useState([]);

    const addOrEdit = async (linkObject) => {
        await db.collection('md').doc().set(linkObject); 
        //'md' indica la colección donde se almacenan los datos
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
        <TableMed addOrEdit={addOrEdit}/>

        <div>
          {values.map(value => (
            <div className="card mb-1">
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
      </div>

    );


}

export default Med;