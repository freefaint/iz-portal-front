import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { MarginBottom } from 'components/atoms/styled';
import SearchTable from 'components/molecules/search';

import { BackgroundSearch, SearchLabel } from './styled';

type Contact = {
  name: string;
  phone: string;
  email: string;
};

interface SearchProps {
  data: Contact[];
  columns: Array<string>;
}

export const Search: FC<SearchProps> = ({ data, columns }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredData, setFilteredData] = useState<Contact[]>(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = () => {
        return data.filter((item) => {
          const itemValues = Object.values(item).join('').toLowerCase();
          const searchStringChars = searchTerm;
          for (let i = 0; i < searchStringChars.length; i++) {
            if (!itemValues.includes(searchStringChars[i])) {
              return false;
            }
          }
          return true;
        });
      };
      setFilteredData(filtered() ?? []);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm, data]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <BackgroundSearch>
      <SearchLabel>Поиск</SearchLabel>

      <MarginBottom>
        <TextField label="Поиск" value={searchTerm} onChange={handleSearchChange} variant="outlined" />
      </MarginBottom>

      <SearchTable filteredData={filteredData} columns={columns} />
    </BackgroundSearch>
  );
};

export default Search;
