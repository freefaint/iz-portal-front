import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout';
import { About } from './pages/about';
import { Main } from './pages/main';
import { Registry } from './pages/registry';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/news/:id?" Component={Main} />
          <Route path="/employee/:id?" Component={Registry} />

          <Route path="/about" Component={About} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
