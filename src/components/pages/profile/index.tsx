import { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import Error from 'components/atoms/errors';
import Profile from 'components/organisms/profiles';

import { ProfileMocks } from './mocks';
import { Styled } from '../styled';
import { EpageStatus } from '../types';

export const ProfilePage: FC = () => {
  const [pageStatus, setPageStatus] = useState<EpageStatus>(EpageStatus.LOADING);

  const [data, setData] = useState<typeof ProfileMocks | null>(null);

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
          [EpageStatus.SUCCESS]: data && <Profile data={data} />,
          [EpageStatus.ERROR]: <Error title={'Ошибка загрузки'} />,
        }[pageStatus]
      }
    </>
  );
};

export default ProfilePage;
