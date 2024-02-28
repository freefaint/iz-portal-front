import { Styled } from './styled';
import ButtonTitle from '../../atoms/Buttons/ButtonTitle';

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
