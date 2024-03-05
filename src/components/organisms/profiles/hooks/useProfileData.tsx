import { ProfileMocks } from 'components/pages/profile/mocks';

export const useProfileData = (data: typeof ProfileMocks) => {
  const accountInfo = data.profile;
  const accountActions = data.infoBlock;

  return {
    accountInfo,
    accountActions,
  };
};
