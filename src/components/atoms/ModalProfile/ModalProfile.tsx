import { FC, useState } from 'react';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';

import { Styled } from './styled';
import ButtonTitle from '../Buttons/ButtonTitle';

export const ModalProfile: FC<any> = ({ updateEdit }) => {
  const [skype, setSkype] = useState<String>('');
  const [workDate, setWorkDate] = useState<String>('');
  const [profession, setProfession] = useState<String>('');
  const [competencie, setCompetencie] = useState<String>('');
  const [workExp, setWorkExp] = useState<String>('');
  const [checkBithday, setCheckBithday] = useState<boolean>(false);
  const [checkMobile, setCheckMobile] = useState<boolean>(false);

  const handleEdit = () => {
    // axios.post ....
    // const editProfile = {
    //   skype: skype,
    //   workDate: workDate,
    //   profession: profession,
    //   competencie: competencie,
    //   workExp: workExp,
    //   checkBithday: checkBithday,
    //   checkMobile: checkMobile,
    // }
    updateEdit(false);
  };

  const handleSearchSkype = (event: any) => {
    setSkype(event.target.value);
  };

  const handleWorkDate = (event: any) => {
    setWorkDate(event.target.value);
  };

  const handleProfession = (event: any) => {
    setProfession(event.target.value);
  };

  const handleCompetencie = (event: any) => {
    setCompetencie(event.target.value);
  };

  const handleWorkExp = (event: any) => {
    setWorkExp(event.target.value);
  };

  return (
    <Styled.ModalFlex>
      <Styled.MaxDiv>
        <FormControlLabel
          onClick={() => setCheckBithday(checkBithday ? false : true)}
          control={<Checkbox />}
          label="Скрыть день рождения"
          className="md-item"
        />
        <FormControlLabel
          onClick={() => setCheckMobile(checkMobile ? false : true)}
          control={<Checkbox />}
          label="Скрыть номер мобильного"
          className="md-item"
        />
        <TextField
          label="Skype"
          value={skype}
          onChange={handleSearchSkype}
          variant="outlined"
          style={{ marginTop: '20px' }}
          className="md-item"
        />
        <TextField
          label="Работаю в ИБ с"
          value={workDate}
          onChange={handleWorkDate}
          variant="outlined"
          style={{ marginBottom: '20px', marginTop: '20px' }}
          className="md-item"
        />
        <TextField
          label="Расшифровка должности"
          value={profession}
          onChange={handleProfession}
          multiline
          variant="outlined"
          rows={4}
          style={{ marginBottom: '20px', marginTop: '20px' }}
          className="md-item"
        />
        <TextField
          label="Неподтвержденные компетенции"
          value={competencie}
          onChange={handleCompetencie}
          multiline
          variant="outlined"
          rows={4}
          style={{ marginBottom: '20px', marginTop: '20px' }}
          className="md-item"
        />
        <TextField
          label="Опыт работы"
          value={workExp}
          onChange={handleWorkExp}
          multiline
          variant="outlined"
          rows={4}
          style={{ marginBottom: '20px', marginTop: '20px' }}
          className="md-item"
        />
      </Styled.MaxDiv>
      <ButtonTitle title={'Отправить изменения'} onClick={handleEdit} />
    </Styled.ModalFlex>
  );
};
