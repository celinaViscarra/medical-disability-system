
import { Box } from 'grommet';
import React from 'react';
import EmployeesProvider from './Context';
import Form from './Form';
import List from './List';

function ContentfulEmployees() {
  return (
    <EmployeesProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
        <Form />
      </Box>
    </EmployeesProvider>
  );
}

export default ContentfulEmployees;