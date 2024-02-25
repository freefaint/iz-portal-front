export const useProfileData = (data: any) => {
  const accountInfo = data.profile;
  const accountActions = data.infoBlock;
  return {
    accountInfo,
    accountActions,
  };
};
