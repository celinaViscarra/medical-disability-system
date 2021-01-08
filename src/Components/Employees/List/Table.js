import React from 'react';
import 'react-super-responsive-table';
import '../../../App.scss';
import { Button, Text, DataTable, Box } from 'grommet';
import { Actions, FormClose, FormEdit } from 'grommet-icons';

export default function Table({ employees, setCurrent, deleteMovie }) {
    return (
      <DataTable
        columns={[
          { property: 'id', primary: true, header: <Text>ID</Text> },
          { property: 'name', header: <Text>Name</Text> },
          { property: 'dateOfAdmission', header: <Text>Date Of Admission</Text> },
          { property: 'jobPosition', header: <Text>Job Position</Text> },
          { property: 'dui', header: <Text>DUI</Text> },
          {
            property: 'actions',
            header: <Actions />,
            render: (row) => {
              return (
                <Box direction="row">
                  <Button
                    type="button"
                    onClick={() => setCurrent(row)}
                    icon={<FormEdit color="brand" />}
                    plain
                  />
                  <Button
                    type="button"
                    onClick={() => deleteMovie(row.id)}
                    icon={<FormClose color="accent-2" />}
                    plain
                  />
                </Box>
              );
            },
          },
        ]}
        data={employees}
      />
    );
  }
