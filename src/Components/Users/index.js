import React, {useState} from 'react';
import '../../App.scss';

const TableU = () => {

  //initial values
  const initialStateValues = {
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
    console.log(e.target.value);
  };

  //when submit values
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <b><span> For re</span></b>
      <h6>  </h6>

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
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">healing</i>
         <span>Medical Area:</span>
        </div>
        <input type="text"
        className="form-control"
        name="medarea"
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">face</i>
         <span>Doctor: </span>
        </div>
        <input type="text"
        className="form-control"
        name="doctor" 
        onChange={handleImputChanges}/>
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
        onChange={handleImputChanges}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_downward</i>
         <span>Date of finish: </span>
        </div>
        <input type="text"
        className="form-control"
        placeholder="dd-mm-yyyy"
        name="finish"
        onChange={handleImputChanges}  />
      </div>

      <button className="btn btn-success">
        Save
      </button>


    </form>
  );
}

export default TableU;