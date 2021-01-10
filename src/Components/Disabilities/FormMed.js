import React, {useState, useEffect} from 'react';
import '../../App.scss';
import { db } from '../../Firebase';
import {toast}  from 'react-toastify';

const TableMed = (props) => {

  //initial values
  const initialStateValues = {
    dui: "",
    date: "",
    medarea: "",
    doctor: "",
    start: "",
    finish: "",
  };

  const [values, setValues] = useState(initialStateValues);

  //For ONchange e (state)
  const handleImputChanges = (e) =>{
    //Para alterar ya el estado.
    const {name, value} = e.target;
    setValues({...values, [name]:value});
  };

  //for invocate the dui
  //const invocateDUi = 

  //for validate dui.
  const validateDui = (str) =>{
    return /^(\d{0,8}-)\d{1}$/.test(str);
  };

  //for validate dates.
  const validateDate = (str) => {
    return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(str);
  };

  //when submit values
  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!validateDui(values.dui)){
      return toast('Invalid DUI!', {type:'warning', autoClose: 1000});
    }

    if (!validateDate(values.date)){
      return toast('Invalid Date!', {type:'warning', autoClose: 1000});
    }

    if (!validateDate(values.start)){
      return toast('Invalid Date!', {type:'warning', autoClose: 1000});
    }

    if (!validateDate(values.finish)){
      return toast('Invalid Date!', {type:'warning', autoClose: 1000});
    }

    props.addOrEdit(values);
    setValues({...initialStateValues});
  };

  const getValueById = async (id) =>{
    const doc = await db.collection("md").doc(id).get();
    console.log(doc.data())
    setValues({...doc.data()})
  };

  useEffect(() => {
    console.log(props.currentId)
    if(props.currentId === ''){
      setValues({...initialStateValues})
    } else {
      console.log(props.currentId)
      getValueById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <b><span> For medical disabilities</span></b>
      <h6>  </h6>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i className="material-icons">person</i>
        <span>Employee DUI:</span>
        </div>
        <input 
        type="text"
        className="form-control"
        name="dui"
        required={true}
        onChange={handleImputChanges}
        value={values.dui} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i className="material-icons">today</i>
        <span>Date:</span>
        </div>
        <input 
        type="datetime"
        className="form-control"
        placeholder="dd-mm-yyyy"
        name="date"
        required={true}
        onChange={handleImputChanges}
        value={values.date} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">healing</i>
         <span>Medical Area:</span>
        </div>
        <input type="text"
        className="form-control"
        name="medarea"
        required={true}
        onChange={handleImputChanges}
        value={values.medarea} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">face</i>
         <span>Doctor: </span>
        </div>
        <input type="text"
        className="form-control"
        name="doctor" 
        required={true}
        onChange={handleImputChanges}
        value={values.doctor}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_upward</i>
         <span>Date of star: </span>
        </div>
        <input type="text"
        className="form-control"
        placeholder="dd-mm-yyyy"
        name="start" 
        required={true}
        onChange={handleImputChanges}
        value={values.start}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_downward</i>
         <span>Date of finish: </span>
        </div>
        <input type="text"
        className="form-control"
        required={true}
        placeholder="dd-mm-yyyy"
        name="finish"
        onChange={handleImputChanges} 
        value={values.finish} />
      </div>

      <div>
      <button className="btn btn-success">
        {props.currentId === '' ? 'Save' : 'Update'}
      </button>
      </div>


    </form>
  );
}

export default TableMed;