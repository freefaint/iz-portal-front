import { FC, useEffect, useState } from 'react';

// import axios from 'axios';

import Error from '@root/components/atoms/Error/Error';
import Profile from '@root/components/organisms/Profile/Profile';

import { CircularProgress } from '@mui/material';

import { ProfileMocks } from './mocks';
import { Styled } from '../styled';
import { EpageStatus } from '../types';

export const ProfilePage: FC = () => {
  const [pageStatus, setPageStatus] = useState<EpageStatus>(EpageStatus.LOADING);
  // TODO типизровать данные при получении бэка
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(ProfileMocks);
      setPageStatus(EpageStatus.SUCCESS);
    }, 1000);
    // axios.get('./')
    // .then(response => {
    // Обработка ответа
    // setPageStatus(EpageStatus.SUCCESS)
    // })
    // .catch(error => {
    // Обработка ошибки
    // setPageStatus(EpageStatus.ERROR)
    // });
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
          [EpageStatus.SUCCESS]: <Profile data={data} />,
          [EpageStatus.ERROR]: <Error title={'Ошибка загрузки'} />,
        }[pageStatus]
      }
    </>
  );
};

export default ProfilePage;
