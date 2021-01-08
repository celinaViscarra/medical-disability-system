import { QueryClient, QueryClientProvider } from 'react-query';
import { Box } from 'grommet';
import React from 'react';
import EmployeesProvider from './Context';
import Form from './Form';
import List from './List';

const queryClient = new QueryClient()

function ContentfulEmployees() {
  return (
     <QueryClientProvider client={queryClient}>
      <EmployeesProvider>
        <Box direction="row" pad="medium" gap="medium">
          <List />
          <Form />
        </Box>
      </EmployeesProvider>
    </QueryClientProvider>
   );
}

export default ContentfulEmployees;