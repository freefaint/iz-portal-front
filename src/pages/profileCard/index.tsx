import { FC } from 'react';

import ProfileIcon from 'components/atoms/icons';

import { Icon, Profile, ProfileFlex } from './style';

export const ProfileCard: FC = () => {
  return (
    <Profile>
      <ProfileFlex>
        <Icon>
          <ProfileIcon
            src="https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png"
            alt="profileIcon"
            width="25rem"
            height="25rem"
          />
        </Icon>
      </ProfileFlex>
      <ProfileFlex>2</ProfileFlex>
    </Profile>
  );
};

export default ProfileCard;
