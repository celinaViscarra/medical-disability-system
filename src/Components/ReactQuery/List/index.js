import React from 'react'
import { Box } from 'grommet';
import ListGrommet from './ListGrommet';

function List() {
const users = []

    return (
        <Box pad="medium" elevation="medium" fill gap="small">
      <Box direction="row" gap="medium">
      </Box>
      <ListGrommet
        users={users}
      />
    </Box>
    )
}

export default List
