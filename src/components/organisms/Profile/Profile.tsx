import React, { FC } from 'react';

import ProfileAccountCard from '@root/components/molecules/Profile/profileAccountCard';
import ProfileActionTable from '@root/components/molecules/Profile/profileActionTable';
import ProfileErrorInfo from '@root/components/molecules/Profile/profileErrorInfo';

import { useProfileData } from './hooks/useProfileData';
import { Styled } from './styled';

export const Profile: FC<any> = ({ data }) => {
  const { accountInfo, accountActions } = useProfileData(data);

  return (
    <>
      <Styled.ColumnFlex>
        <ProfileAccountCard accountInfo={accountInfo} />
        <ProfileActionTable accountActions={accountActions} />
        <ProfileErrorInfo />
      </Styled.ColumnFlex>
    </>
  );
};

export default Profile;
