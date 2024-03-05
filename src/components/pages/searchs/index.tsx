import { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import Error from 'components/atoms/errors';
import Search from 'components/organisms/search';

import { searchTableColumns, searchTableMocks } from './mocks';
import { Styled } from '../styled';
import { EpageStatus } from '../types';

type Contact = {
  name: string;
  phone: string;
  email: string;
};

type Contacts = Contact[];

export const SearchPage: FC = () => {
  const [data, setData] = useState<Contacts>(searchTableMocks);
  const [columns, setColumns] = useState<Array<string>>(searchTableColumns);
  const [pageStatus, setPageStatus] = useState<EpageStatus>(EpageStatus.LOADING);

  useEffect(() => {
    setTimeout(() => {
      setData(searchTableMocks);
      setColumns(searchTableColumns);
      setPageStatus(EpageStatus.SUCCESS);
    }, 1000);
  }, []);

  return (
    <>
      {
        {
          [EpageStatus.LOADING]: (
            <Styled.ProfileFlex>
              <CircularProgress />
            </Styled.ProfileFlex>
          ),
          [EpageStatus.SUCCESS]: <Search data={data} columns={columns} />,
          [EpageStatus.ERROR]: <Error title={'Ошибка загрузки'} />,
        }[pageStatus]
      }
    </>
  );
};

export default SearchPage;
