import React, { FC } from 'react';

import { useProfileData } from './hooks/useProfileData';
import { Styled } from './styled';
import ProfileAccountCard from '../../molecules/Profile/profileAccountCard';
import ProfileActionTable from '../../molecules/Profile/profileActionTable';
import ProfileErrorInfo from '../../molecules/Profile/profileErrorInfo';

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
