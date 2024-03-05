import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Switch, TextField } from '@mui/material';
import SearchTable from 'components/molecules/search';

import { BackgroundSearch, MoreSwitch, SearchLabel, SwitchBlock, SwitchText } from './styled';

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
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [phoneSearchTerm, setPhoneSearchTerm] = useState('');
  const [emailSearchTerm, setEmailSearchTerm] = useState('');

  const [filteredData, setFilteredData] = useState<Contact[]>(data);
  const [moreSearch, setMoreSearch] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = () => {
        if (!moreSearch) {
          return data.filter(
            (item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.email.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        if (moreSearch) {
          return data.filter((item) => {
            if (nameSearchTerm && !phoneSearchTerm && !emailSearchTerm) {
              return item.name.toLowerCase().includes(nameSearchTerm.toLowerCase());
            }
            if (nameSearchTerm && phoneSearchTerm && !emailSearchTerm) {
              return (
                item.name.toLowerCase().includes(nameSearchTerm.toLowerCase()) &&
                item.phone.toLowerCase().includes(phoneSearchTerm.toLowerCase())
              );
            }
            if (nameSearchTerm && phoneSearchTerm && emailSearchTerm) {
              return (
                item.name.toLowerCase().includes(nameSearchTerm.toLowerCase()) &&
                item.phone.toLowerCase().includes(phoneSearchTerm.toLowerCase()) &&
                item.email.toLowerCase().includes(emailSearchTerm.toLowerCase())
              );
            }
            return data;
          });
        }
      };
      setFilteredData(filtered() ?? []);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm, data, moreSearch, nameSearchTerm, phoneSearchTerm, emailSearchTerm]);

  const handleNameSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNameSearchTerm(event.target.value);
  };

  const handlePhoneSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhoneSearchTerm(event.target.value);
  };

  const handleEmailSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailSearchTerm(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSwitch = () => {
    setMoreSearch(moreSearch ? false : true);
  };

  return (
    <BackgroundSearch>
      <SearchLabel>Поиск</SearchLabel>
      <SwitchBlock>
        <SwitchText>Расширенный поиск</SwitchText>
        <Switch onClick={handleSwitch} />
      </SwitchBlock>
      {!moreSearch && (
        <TextField
          label="Поиск"
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          style={{ marginBottom: '20px' }}
        />
      )}
      {moreSearch && (
        <MoreSwitch>
          <TextField
            label="Имя"
            value={nameSearchTerm}
            onChange={handleNameSearchChange}
            variant="outlined"
            style={{ marginBottom: '16px' }}
          />

          <TextField
            label="Телефон"
            value={phoneSearchTerm}
            onChange={handlePhoneSearchChange}
            variant="outlined"
            style={{ marginBottom: '16px' }}
          />

          <TextField
            label="Почта"
            value={emailSearchTerm}
            onChange={handleEmailSearchChange}
            variant="outlined"
            style={{ marginBottom: '16px' }}
          />
        </MoreSwitch>
      )}
      <SearchTable filteredData={filteredData} columns={columns} />
    </BackgroundSearch>
  );
};

export default Search;
