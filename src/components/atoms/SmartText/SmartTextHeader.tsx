import { FC } from 'react';

import { SmartText } from './styled';

type Props = {
  props?: Array<String>;
};
export const SmartTextHeader: FC<Props> = ({ props }) => <SmartText>{props?.map((i) => i)}</SmartText>;
