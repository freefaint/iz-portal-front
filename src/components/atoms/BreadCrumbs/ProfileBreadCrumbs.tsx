import { FC } from 'react';

import { Breadcrumbs, Link } from '@mui/material';

type Props = {
  breadcrumbs: Array<String>;
};
export const ProfileBreadCrumbs: FC<Props> = ({ breadcrumbs }) => (
  <Breadcrumbs>{breadcrumbs?.map((item, index) => <Link key={index}>{item}</Link>)}</Breadcrumbs>
);
