import { FC } from 'react';

import { SmartText } from './styled';

interface IProps {
  props?: Array<string>;
}

export const SmartTextHeader: FC<IProps> = ({ props }) => <SmartText>{props?.map((i) => i)}</SmartText>;
