import React, { FC } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface IProps {
  filteredData: { name: string; phone: string; email: string }[];
  columns: string[];
}

export const SearchTable: FC<IProps> = ({ filteredData, columns }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.email}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchTable;
