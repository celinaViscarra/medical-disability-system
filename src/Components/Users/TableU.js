import React, {useState} from 'react';
import '../../App.scss';

const TableU = () => {

  //initial values
  const initialStateValues = {
    name: "",
    lastname: "",
}

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
      <b><span> Users</span></b>
      <h6>  </h6>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i className="material-icons">person</i>
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
         <i className="material-icons">navigate_next</i>
         <span>Name:</span>
        </div>
        <input type="text"
        className="form-control"
        name="name"
        onChange={handleImputChanges} />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         <i className="material-icons">navigate_next</i>
         <span>Last Name: </span>
        </div>
        <input type="text"
        className="form-control"
        name="lastname" 
        onChange={handleImputChanges}/>
      </div>

      <button className="btn btn-success">
        Save
      </button>


    </form>
  );
}

export default TableU;