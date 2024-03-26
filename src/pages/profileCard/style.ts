import styled from 'styled-components';

import { ALPHA_DARK_BLUE } from 'styles';

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.0625rem solid rgba(0, 0, 0, 0.02);
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0rem 0.875rem 2.625rem 0rem ${ALPHA_DARK_BLUE};
  width: 100%;
  height: 100%;
`;

export const ProfileFlex = styled.div`
  display: flex;
  width: 48%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Icon = styled.div`
  display: flex;
  box-sizing: border-box;
`;
