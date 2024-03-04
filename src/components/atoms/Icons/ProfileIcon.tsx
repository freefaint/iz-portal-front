import { FC } from 'react';

import { Box } from '@mui/material';

interface IProps {
  src?: string;
  height?: number;
  width?: number;
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

export default ProfileIcon;
