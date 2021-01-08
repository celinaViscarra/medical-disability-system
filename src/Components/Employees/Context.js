import React, { createContext, useState } from 'react';

export const EmployeesContext = createContext();

function EmployeesProvider(props) {
  // const [employees, setEmployees] = useState([]);
  const [current, setCurrent] = useState({});

  return (
    <EmployeesContext.Provider
      value={{
        // employees: [employees, setEmployees],
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
}

export default EmployeesProvider;