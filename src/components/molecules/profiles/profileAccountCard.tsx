import { useState } from 'react';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal } from '@mui/material';
import ButtonTitle from 'components/atoms/buttons';
import { ProfileIcon } from 'components/atoms/icons';
import { ModalProfile } from 'components/atoms/modal-profile';

import CardInfo, { TAccount } from './profile-info-card';
import { Styled } from './styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 1,
};

interface IProps {
  accountInfo: TAccount;
}

export const ProfileAccountCard = ({ accountInfo }: IProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleEdit = () => {
    setEdit(edit ? false : true);
  };

  const handleClose = () => {
    setEdit(false);
  };

  return (
    <>
      <Styled.Account>
        <Styled.AccountCardBlock>
          <Styled.IconCard>
            <ProfileIcon
              src={'https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png'}
              alt={'profileIcon'}
              width={100}
              height={100}
            />
          </Styled.IconCard>
          <Styled.InfoCard>
            <CardInfo props={accountInfo} />
          </Styled.InfoCard>
          <Styled.ActionCard onClick={handleEdit}>
            <ButtonTitle title="Редактировать" />
          </Styled.ActionCard>
        </Styled.AccountCardBlock>
      </Styled.Account>
      <Modal open={edit} onClose={handleClose}>
        <Box sx={style}>
          <Styled.Justify>
            <Styled.ModalH>Редактировать профиль</Styled.ModalH>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Styled.Justify>
          <ModalProfile updateEdit={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default ProfileAccountCard;
