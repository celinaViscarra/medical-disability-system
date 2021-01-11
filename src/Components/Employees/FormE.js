import React, {useState, useEffect} from 'react';
import '../../App.scss';
import { db } from '../../Firebase';
import {toast}  from 'react-toastify';

const TableE = (props) => {

  //initial values
  const initialStateValues = {
    id: "",
    name: "",
    lastname: "",
    dui: "",
    date: "",
    job: "",
    genre: "",
  };

  const [values, setValues] = useState('');

  //For ONchange e (state)
  const handleImputChanges = (e) =>{
    //Para alterar ya el estado.
    const {name, value} = e.target;
    setValues({...values, [name]:value});
  };

  //Validations.
  //For validate genre.
  const validateGenre = (str) => {
    return /^(F|M)$/.test(str);
  };

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

    if(!validateGenre(values.genre)){
      return toast('Please verify the last entry!', {type:'warning', autoClose: 2000})
    }

    if (!validateDui(values.dui)){
      return toast('Invalid DUI!', {type:'warning', autoClose: 2000});
    }

    if (!validateDate(values.date)){
      return toast('Invalid Date!', {type:'warning', autoClose: 2000});
    }

    props.addOrEdit(values);
    console.log(values);
    setValues({...initialStateValues});
  };

  const getValueById = async (id) =>{
    const doc = await db.collection("employees").doc(id).get();
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
      <b><span> Employee Form</span></b>
      <h6>  </h6>
      <div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i className="material-icons">person</i>
        <span>ID:</span>
        </div>
        <input 
        type="number"
        required={true}
        className="form-control"
        placeholder="0000"
        value={values.id}
        name="id"
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">navigate_next</i>
         <span>Name:</span>
        </div>
        <input 
        type="text"
        value={values.name}
        required={true}
        className="form-control"
        name="name"
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">navigate_next</i>
         <span>Last Name: </span>
        </div>
        <input 
        type="text"
        value={values.lastname}
        required={true}
        className="form-control"
        name="lastname" 
        onChange={handleImputChanges}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">face</i>
         <span>DUI: </span>
        </div>
        <input 
        type="text"
        value={values.dui}
        className="form-control"
        required={true}
        placeholder="xxxxxxxx-x"
        name="dui" 
        onChange={handleImputChanges}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">event</i>
         <span>Date of admission: </span>
        </div>
        <input 
        type="datetime"
        value={values.date}
        className="form-control"
        placeholder="dd-mm-yyyy"
        required={true}
        name="date"
        onChange={handleImputChanges}  />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">show_chart</i>
         <span>Job Position: </span>
        </div>
        <input 
        type="text"
        value={values.job}
        className="form-control"
        required={true}
        name="job"
        onChange={handleImputChanges}  />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">wc</i>
         <span>Genre: </span>
        </div>
        <input 
        type="text"
        required={true}
        value={values.genre}
        className="form-control"
        name="genre"
        onChange={handleImputChanges}  />
      </div>
      <div >
      <button className="btn btn-success">
        {props.currentId === '' ? 'Save' : 'Update'}
      </button>
      </div>
      </div>

    </form>
  );
}

export default TableE;