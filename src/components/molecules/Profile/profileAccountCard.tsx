import ButtonTitle from '@root/components/atoms/Buttons/ButtonTitle';
import { ProfileIcon } from '@root/components/atoms/Icons/ProfileIcon';

import CardInfo from './ProfileInfoCard/CardInfo';
import { Styled } from './styled';

export const ProfileAccountCard = ({ accountInfo }: any) => {
  return (
    <>
      <Styled.Account>
        <Styled.AccountCardBlock>
          <Styled.IconCard>
            <ProfileIcon
              src={'https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png'}
              alt={'profileIcon'}
              width={100}
              height={100}
            />
          </Styled.IconCard>
          <Styled.InfoCard>
            <CardInfo props={accountInfo} />
          </Styled.InfoCard>
          <Styled.ActionCard>
            <ButtonTitle title="Редактировать" />
          </Styled.ActionCard>
        </Styled.AccountCardBlock>
      </Styled.Account>
    </>
  );
};

export default ProfileAccountCard;
