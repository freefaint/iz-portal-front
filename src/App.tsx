import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Notice } from 'pages/notice';
import ProfileCard from 'pages/profileCard';

import Profile from './components/pages/profile';
import SearchPage from './components/pages/searchs';
import Layout from './layout';
import { About } from './pages/about';
import { Main } from './pages/main';
import { Swagger } from './pages/swagger';

if (process.env.NODE_ENV === 'development') {
  require('__mock__');
}

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/profile" Component={Profile} />
            <Route path="/news/:id?" Component={Main} />
            <Route path="/notice/:id?" Component={Notice} />
            <Route path="/employee/:id?" Component={SearchPage} />
            <Route path="/profileCard/:id?" Component={ProfileCard} />

            <Route path="/about" Component={About} />

            <Route path="/swagger" Component={Swagger} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
