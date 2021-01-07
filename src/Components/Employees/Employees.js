import React from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table'
import '../../App.scss';

function TableE() {
  return (
    <div>
      <table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Date of admission</Th>
            <Th>Jop positions</Th>
            <Th>DUI</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          
        </Tbody>
      </table>
    </div>
  );
}

export default TableE;