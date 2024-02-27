export const ProfileMocks = {
  profile: {
    icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Favatar_147142&psig=AOvVaw3wkY5zLrBKVj8EoFQdGshe&ust=1708672294124000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCj0LqyvoQDFQAAAAAdAAAAABAE',
    firstName: 'Терещенко',
    secondName: 'Андрей',
    lastName: 'Дмитриевич',
    jobTitle: 'Старший программист',
    breadcrumbs: [
      'АО НИП ИНФОРМЗАЩИТА',
      'Техническая дирекция',
      'Центр специальных разработок',
      'Отдел разработки',
      'Группа разработки пользовательских интерфейсов',
    ],
    dateOn: '24.08.2018',
    birthday: '08.08',
    telephone: '416',
    mobileTelephone: '+79153868840',
    email: 'a.tereshenko@infosec.ru',
  },
  infoBlock: [
    {
      label: 'Личная информация',
      type: 'list',
      containers: [
        {
          label: 'Информация об отпусках',
          value: 'loreum lorem lorem lorem',
        },
        {
          label: 'Информация о действующих доп.соглашениях по обучению',
          value: 'loreum lorem lorem lorem',
        },
        {
          label: 'Информация о ДМС',
          value: 'loreum lorem lorem lorem',
        },
      ],
    },
    {
      label: 'Компетенции',
      type: 'list',
      containers: [],
    },
    {
      label: 'Заместители',
      type: 'table',
      containers: {
        columns: ['Причина отсутсвия', 'Дата С', 'Дата по', 'Заместитель', ''],
        dateType: ['input', 'input', 'input', 'input', 'icon'],
      },
    },
    {
      label: 'Дополнительная информация',
      type: 'stringList',
      containers: [
        {
          label: 'Основная организация:',
          value: '-',
        },
        {
          label: 'Совместитель в',
          value: '',
        },
      ],
    },
  ],
};
