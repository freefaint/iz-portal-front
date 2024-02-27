import ButtonTitle from '@root/components/atoms/Buttons/ButtonTitle';

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
