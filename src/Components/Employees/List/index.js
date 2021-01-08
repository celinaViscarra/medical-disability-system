import { Box, Button, Text } from 'grommet';
import { AddCircle, Refresh, StatusCritical } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { EmployeesContext } from '../Context';
import { getEntries } from '../sdk/deliveryAPI';
import { deleteEntry } from '../sdk/managementAPI';
import Table from './Table';

function List() {
  const {
    current: [, setCurrent],
  } = useContext(EmployeesContext);

const queryClient = new QueryClient()

function App() {
   return (
     <QueryClientProvider client={queryClient}>
       ...
     </QueryClientProvider>
   )
}

  const { isLoading, error, data, isFetching} = useQuery(
    'fetchEmployees', //error
    function () {
      return getEntries();
    }
  );

  const deleteMutation = useMutation(
    function (id) {
      return deleteEntry(id);
    },
    {
      onSuccess: function () {
        console.log('info', 'Action performed successfully');
        queryClient.invalidateQueries('fetchEmployees');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const deleteEmployee = (id) => {
    deleteMutation.mutate(id);
  };

  const setCurrentEmployee = (employee) => {
    setCurrent(employee);
  };

  if (isLoading) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-1">
          Loading... <Refresh color="accent-1" />
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-2">
          An error has occurred... <StatusCritical color="accent-2" />
        </Text>
      </Box>
    );
  }

  return (
    <Box pad="medium" elevation="medium" fill gap="small">
      {isFetching && (
        <Box direction="row" gap="medium">
          <Text color="accent-2">
            Fetching data... <Refresh color="accent-2" />
          </Text>
        </Box>
      )}

      <Box direction="row" gap="medium" justify="end">
        <Button
          type="button"
          onClick={() => setCurrent({})}
          label="Add"
          icon={<AddCircle color="brand" />}
          color="accent-1"
        />
      </Box>

      <Table
        employees={data}
        setCurrent={setCurrentEmployee}
        deleteEmployee={deleteEmployee}
      />
    </Box>
  );
}

export default List;