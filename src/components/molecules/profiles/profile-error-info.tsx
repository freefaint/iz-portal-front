import ButtonTitle from 'components/atoms/buttons';

import { Styled } from './styled';

export const ProfileErrorInfo = () => {
  return (
    <>
      <Styled.ErrorInfo>
        <ButtonTitle title="Сообщить о неактуальной информации" />
      </Styled.ErrorInfo>
    </>
  );
};

export default ProfileErrorInfo;
