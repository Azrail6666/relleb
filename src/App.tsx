import React, { FC } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page';
import BlogArticlePage from './components/pages/blog-article-page';
import AuthenticationServicePage from './components/pages/authentication-service';
import Service1Page from './components/pages/service1-page';
import Service2Page from './components/pages/service2-page';
import Service3Page from './components/pages/service3-page';

const App: FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<BlogArticlePage />} />
      <Route path="/authentication" element={<AuthenticationServicePage />} />
      <Route path="/service1" element={<Service1Page />} />
      <Route path="/service2" element={<Service2Page />} />
      <Route path="/service3" element={<Service3Page />} />
    </Routes>
  </HashRouter>
);

export default App;
