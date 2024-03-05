import { FC } from 'react';

import { Breadcrumbs, Link } from '@mui/material';

type IProps = {
  breadcrumbs: string[];
};
export const ProfileBreadCrumbs: FC<IProps> = ({ breadcrumbs }) => (
  <Breadcrumbs>{breadcrumbs?.map((item, index) => <Link key={index}>{item}</Link>)}</Breadcrumbs>
);
