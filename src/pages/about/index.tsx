import { Typography } from '@mui/material';
import aboutImgSrc from 'assets/img/about.jpg';

export const About = () => {
  return (
    <>
      <Typography variant="h4">О компании</Typography>
      <img src={aboutImgSrc} alt="" />
    </>
  );
};
