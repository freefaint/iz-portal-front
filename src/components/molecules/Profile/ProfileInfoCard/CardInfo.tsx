import { FC } from 'react';

import { ProfileBreadCrumbs } from '@root/components/atoms/BreadCrumbs/ProfileBreadCrumbs';

import { Styled } from './styled';

export const CardInfo: FC<any> = ({ props }) => {
  const handleEmail = () => {
    //TODO открытие почты
  };

  return (
    <Styled.CardInfoColumn>
      <Styled.PersonName>
        {props.firstName} {props.secondName} {props.lastName}
      </Styled.PersonName>
      <Styled.PersonP>Дата рождения: {props.birthday}</Styled.PersonP>
      <Styled.PersonP>{props.jobTitle}</Styled.PersonP>
      <Styled.Bread>
        <ProfileBreadCrumbs breadcrumbs={props.breadcrumbs} />
      </Styled.Bread>
      <Styled.PersonP>
        Телефон:
        <Styled.LinkAction>{props.telephone}</Styled.LinkAction>
      </Styled.PersonP>
      <Styled.PersonP>
        Мобильный:
        <Styled.LinkAction>{props.mobileTelephone}</Styled.LinkAction>
      </Styled.PersonP>
      <Styled.PersonP onClick={handleEmail}>
        E-mail:
        <Styled.LinkAction>{props.email}</Styled.LinkAction>
      </Styled.PersonP>
    </Styled.CardInfoColumn>
  );
};

export default CardInfo;
