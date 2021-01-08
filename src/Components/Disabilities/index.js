import React from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table'
import '../../App.scss';

function TableMed() {
  return (
    <div>
      <table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Medical Area</Th>
            <Th>Doctor</Th>
            <Th>Date of Medical Disability</Th>
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

export default TableMed;