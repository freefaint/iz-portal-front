import { FC } from 'react';

import styled from 'styled-components';

import { Box } from '@mui/material';

interface IProps {
  src?: string;
  height?: string | number;
  width?: string | number;
  alt?: string;
}

export const ProfileIcon: FC<IProps> = ({ src, height, width, alt }) => {
  return (
    <Box
      component="img"
      sx={{
        height: height,
        width: width,
      }}
      alt={alt}
      src={src}
    />
  );
};

export const TinyImg = styled.img`
  width: 1rem;
  height: 1rem;
`;

export default ProfileIcon;
