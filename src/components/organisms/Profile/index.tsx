import React, { FC } from 'react';

import { TAction } from 'components/molecules/Profile/profileActionTable';

import ProfileAccountCard from 'components/molecules/profiles/profileAccountCard';
import ProfileActionTable from 'components/molecules/profiles/profileActionTable';
import ProfileErrorInfo from 'components/molecules/profiles/profileErrorInfo';
import { ProfileMocks } from 'components/pages/profile/mocks';

import { useProfileData } from './hooks/useProfileData';
import { Styled } from './styled';

interface IProps {
  data: typeof ProfileMocks;
}

export const Profile: FC<IProps> = ({ data }) => {
  const { accountInfo, accountActions } = useProfileData(data);

  return (
    <>
      <Styled.ColumnFlex>
        <ProfileAccountCard accountInfo={accountInfo} />
        <ProfileActionTable accountActions={accountActions as TAction} />
        <ProfileErrorInfo />
      </Styled.ColumnFlex>
    </>
  );
};

export default Profile;
