//TODO окончательно типизировать на данных бэка, вынести из всех мест в отдельный файл
export const useProfileData = (data: any) => {
  const accountInfo = data.profile;
  const accountActions = data.infoBlock;
  return {
    accountInfo,
    accountActions,
  };
};
