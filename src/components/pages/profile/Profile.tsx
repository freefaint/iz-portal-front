import { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { ProfileMocks } from './mocks';
import Error from '../../atoms/Error/Error';
import Profile from '../../organisms/Profile/Profile';
import { Styled } from '../styled';
import { EpageStatus } from '../types';

export const ProfilePage: FC = () => {
  const [pageStatus, setPageStatus] = useState<EpageStatus>(EpageStatus.LOADING);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(ProfileMocks);
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
          [EpageStatus.SUCCESS]: <Profile data={data} />,
          [EpageStatus.ERROR]: <Error title={'Ошибка загрузки'} />,
        }[pageStatus]
      }
    </>
  );
};

export default ProfilePage;
