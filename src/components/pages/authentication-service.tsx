import React, { FC } from 'react';
import Header from '../templates/header/component';
import Footer from '../templates/footer/component';
import AuthenticationService from '../templates/authentication-service/component';

const AuthenticationServicePage: FC = () => (
  <>
    <Header line />
    <AuthenticationService />
    <Footer />
  </>
);

export default AuthenticationServicePage;
