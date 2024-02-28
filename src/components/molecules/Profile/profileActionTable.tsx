import React, { FC, useCallback, useEffect, useState } from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ProfileActionList from './ProfileActionTable/ProfileActionList';
import { Styled } from './styled';

type Props = {
  accountActions: Array<{
    label: string;
    type: string;
    containers: Array<any>;
    isCheck?: boolean;
  }>;
};

type Action = Array<{
  label: string;
  type: string;
  containers: Array<any>;
  isCheck?: boolean;
}>;

export const ProfileActionTable: FC<Props> = ({ ...accountActions }) => {
  const [action, setAction] = useState<Action | null>(null);

  useEffect(() => {
    if (accountActions && !action) {
      setAction(
        accountActions.accountActions.map((item, index) => {
          if (index === 0) {
            item.isCheck = true;
          } else item.isCheck = false;
          return item;
        }),
      );
    }
  }, [accountActions, action]);

  const handleOpenElement = useCallback(
    (id: number) => {
      setAction(
        action!.map((item, index) => {
          if (id === index) {
            item.isCheck = true;
          } else item.isCheck = false;
          return item;
        }),
      );
    },
    [action],
  );

  return (
    <>
      <Styled.AccountAction>
        <Styled.ActionBorder>
          {action?.map((item, index) => (
            <Styled.ActionTableFlex
              key={index}
              onClick={() => handleOpenElement(index)}
              idk={index}
              ids={action.length - 1}
              className="tb-flex"
            >
              {item.label}
              <Styled.Active>{item.isCheck ? <CheckCircleIcon /> : <></>}</Styled.Active>
            </Styled.ActionTableFlex>
          ))}
        </Styled.ActionBorder>
        <ProfileActionList props={action?.find((i) => i.isCheck)?.containers} />
      </Styled.AccountAction>
    </>
  );
};

export default ProfileActionTable;
