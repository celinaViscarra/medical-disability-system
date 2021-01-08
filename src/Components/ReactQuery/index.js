import React from 'react'
import{Box, Grommet} from 'grommet'
import {List} from './List'
import {Form} from './Form'

function ReactQuery() {
    return (
        <Box direction="row" pad="medium" gap="medium">
          <List />
          <Form />
        </Box>
    );
}

export default ReactQuery;