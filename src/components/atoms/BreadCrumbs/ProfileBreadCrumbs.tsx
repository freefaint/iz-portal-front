import { FC } from 'react';

import { Breadcrumbs, Link } from '@mui/material';

type Props = {
  breadcrumbs: Array<String>;
};
export const ProfileBreadCrumbs: FC<Props> = ({ breadcrumbs }) => {
  return <Breadcrumbs>{breadcrumbs?.map((item) => <Link>{item}</Link>)}</Breadcrumbs>;
};
