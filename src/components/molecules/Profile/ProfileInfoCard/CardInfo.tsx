import { FC } from 'react';

import { Styled } from './styled';
import { ProfileBreadCrumbs } from '../../../atoms/BreadCrumbs/ProfileBreadCrumbs';

export type TAccount = Record<string, string> & { breadcrumbs: string[] };

type IAccountProps = { props: TAccount };

export const CardInfo: FC<IAccountProps> = ({ props }) => {
  const handleEmail = () => {
    //TODO открытие почты
  };

  return (
    <Styled.CardInfoColumn>
      <Styled.PersonName>
        {props.firstName} {props.secondName} {props.lastName}
      </Styled.PersonName>
      {props.birthday && <Styled.PersonP>Дата рождения: {props.birthday}</Styled.PersonP>}
      <Styled.PersonP>{props?.jobTitle}</Styled.PersonP>
      <Styled.Bread>
        <ProfileBreadCrumbs breadcrumbs={props?.breadcrumbs} />
      </Styled.Bread>
      <Styled.PersonP>
        Телефон:
        <Styled.LinkAction>{props?.telephone}</Styled.LinkAction>
      </Styled.PersonP>
      {props.mobileTelephone && (
        <Styled.PersonP>
          Мобильный:
          <Styled.LinkAction>{props.mobileTelephone}</Styled.LinkAction>
        </Styled.PersonP>
      )}
      <Styled.PersonP onClick={handleEmail}>
        E-mail:
        <Styled.LinkAction>{props?.email}</Styled.LinkAction>
      </Styled.PersonP>
      <Styled.PersonP>
        Skype:
        <Styled.LinkAction>{props?.skype}</Styled.LinkAction>
      </Styled.PersonP>
    </Styled.CardInfoColumn>
  );
};

export default CardInfo;
