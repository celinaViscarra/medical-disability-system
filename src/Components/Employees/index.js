import React, {useState} from 'react';
import '../../App.scss';

const TableE = () => {

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
        <span>ID:</span>
        </div>
        <input 
        type="number"
        className="form-control"
        placeholder="0000"
        name="id"
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">healing</i>
         <span>Name:</span>
        </div>
        <input type="text"
        className="form-control"
        name="name"
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">face</i>
         <span>Last Name: </span>
        </div>
        <input type="text"
        className="form-control"
        name="lastname" 
        onChange={handleImputChanges}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_upward</i>
         <span>DUI: </span>
        </div>
        <input type="text"
        className="form-control"
        placeholder="xxxxxxxx-x"
        name="dui" 
        onChange={handleImputChanges}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_downward</i>
         <span>Date of admission: </span>
        </div>
        <input type="datetime"
        className="form-control"
        placeholder="dd-mm-yyyy"
        name="date"
        onChange={handleImputChanges}  />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_downward</i>
         <span>Job Position: </span>
        </div>
        <input type="text"
        className="form-control"
        name="job"
        onChange={handleImputChanges}  />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">arrow_downward</i>
         <span>Genre: </span>
        </div>
        <input type="text"
        className="form-control"
        name="genre"
        onChange={handleImputChanges}  />
      </div>


      <button className="btn btn-success">
        Save
      </button>


    </form>
  );
}

export default TableE;