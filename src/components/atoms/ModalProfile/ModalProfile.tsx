import { ChangeEvent, FC, useState } from 'react';

import { Checkbox, FormControlLabel, TextField } from '@mui/material';

import { Styled } from './styled';
import ButtonTitle from '../Buttons/ButtonTitle';

interface IProps {
  updateEdit: (bool: boolean) => void;
}

export const ModalProfile: FC<IProps> = ({ updateEdit }) => {
  const [skype, setSkype] = useState<string>('');
  const [workDate, setWorkDate] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [competencie, setCompetencie] = useState<string>('');
  const [workExp, setWorkExp] = useState<string>('');
  const [checkBithday, setCheckBithday] = useState<boolean>(false);
  const [checkMobile, setCheckMobile] = useState<boolean>(false);

  const handleEdit = () => {
    updateEdit(false);
  };

  const handleSearchSkype = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSkype(event.target.value);
  };

  const handleWorkDate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWorkDate(event.target.value);
  };

  const handleProfession = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfession(event.target.value);
  };

  const handleCompetencie = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCompetencie(event.target.value);
  };

  const handleWorkExp = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
