import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { QueryClient, QueryClientProvider, useMutation } from 'react-query'
import { EmployeesContext } from '../Context';
import { createEntry, updateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';

function Form() {
  const {
    current: [current],
  } = useContext(EmployeesContext);

  const queryClient = new QueryClient()

  function App() {
     return (
       <QueryClientProvider client={queryClient}>
         ...
       </QueryClientProvider>
     )
  }

  const mutation = useMutation( //error
    function ({ data, id }) {
      if (!id) {
        return createEntry(data);
      } else {
        return updateEntry(id, data);
      }
    },
    {
      onSuccess: function () {
        console.log('success', 'Action performed successfully');
        queryClient.invalidateQueries('fetchEmployees');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const isAddMode = !current.id;

  const onSubmit = (values) => {
    console.log('values submitted', values)

    const payload = {
      ...values,
      budget: parseInt(values.budget, 10),
      boxOffice: parseInt(values.boxOffice, 10),
      runningTime: parseInt(values.runningTime, 10),
    };
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.poster;
    delete payload.cast;
    delete payload.id;

    console.log({ values, payload });

    if (isAddMode) {
      mutation.mutate({ data: payload });
    } else {
      mutation.mutate({ data: payload, id: current.id });
    }
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            User created successfully... <StatusGood color="brand" />
          </Text>
        </Box>
      )}

      {mutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            An error has occurred... <StatusCritical color="accent-1" />
          </Text>
        </Box>
      )}

      <FormLayout
        onSubmit={onSubmit}
        currentValues={current}
        key={current.id}
      />
    </Box>
  );
}

export default Form;