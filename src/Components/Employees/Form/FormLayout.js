import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
import { Clock, Money } from 'grommet-icons';
import React from 'react';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const [value, setValue] = React.useState(defaultValues);

  return (
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
      }}
      onReset={() => setValue(defaultValues)}
      onSubmit={(event) => {
        console.log('Submit', event.value, event.touched);
        onSubmit(event.value);
      }}
    >
      <FormField label="Id" name="id">
        <TextInput name="id" />
      </FormField>

      <FormField label="Name" name="name">
        <TextInput name="name" />
      </FormField>

      <FormField label="Date of admission" name="dateOfAdmission">
        <TextInput name="dateOfAdmission" format="yyyy-mm-dd" />/>
      </FormField>

      <FormField label="Job position" name="jobPosition">
        <TextInput type="number" name="jobPosition" icon={<Money />} />
      </FormField>

      <FormField label="DUI" name="dui">
        <TextInput type="number" name="dui" icon={<Money />} />
      </FormField>


      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button label="Cancel" />
        <Button type="reset" label="Reset" />
        <Button type="submit" label="Submit" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;