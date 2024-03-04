import { FC, Key, useState } from 'react';

import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';

import { ActionFlex, ActionJustify, UlDiv } from './styled';

enum ETypeProps {
  ULTABLE = 'UlTable',
  UNKNOWN = 'unkwown',
  TABLE = 'table',
  STRINGLIST = 'stringList',
}

type ActionList = {
  label: string;
  type: string;
  containers: any;
  isCheck?: boolean;
};
type Props = {
  props: ActionList;
};

//TODO описать мапер для каждого типа
export const ProfileActionList: FC<Props> = ({ props }) => {
  const [openList, setOpenList] = useState<boolean[]>(Array(props.containers.length).fill(false));

  const handleClick = (index: number) => {
    const newOpenList = [...openList];
    newOpenList[index] = !newOpenList[index];
    setOpenList(newOpenList);
  };
  // console.log(props.containers?.columns?.length);

  if (props.type === ETypeProps.ULTABLE) {
    return (
      <UlDiv>
        {props.containers.map((item: { label: string; value: string }, index: number) => (
          <List key={index}>
            <ListItemButton onClick={() => handleClick(index)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
              {openList[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openList[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="value" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        ))}
      </UlDiv>
    );
  }

  if (props.type === ETypeProps.TABLE) {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {props.containers.columns.map((column: string | number, index: Key) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {props.containers.columns.map((_: string | number, index: Key) => (
                <TableCell key={index}>
                  {props.containers.columns.length - 1 !== index ? (
                    <TextField variant="outlined" fullWidth />
                  ) : (
                    <CheckCircleIcon style={{ color: 'green' }} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  if (props.type === ETypeProps.STRINGLIST) {
    return (
      <ActionFlex>
        {props?.containers?.map((item: { label: string; value: string }) => (
          <ActionJustify>{`${item.label} ${item.value}`}</ActionJustify>
        ))}
      </ActionFlex>
    );
  }

  return <div></div>;
};

export default ProfileActionList;
