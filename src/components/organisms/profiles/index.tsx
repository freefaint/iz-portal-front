import React, { FC } from 'react';

import ProfileAccountCard from 'components/molecules/profiles/profile-account-card';
import { ProfileMocks } from 'components/pages/profile/mocks';

import { useProfileData } from './hooks/useProfileData';
import { Styled } from './styled';

interface IProps {
  data: typeof ProfileMocks;
}

export const Profile: FC<IProps> = ({ data }) => {
  const { accountInfo } = useProfileData(data);

  return (
    <>
      <Styled.ColumnFlex>
        <ProfileAccountCard accountInfo={accountInfo} />
      </Styled.ColumnFlex>
    </>
  );
};

export default Profile;
