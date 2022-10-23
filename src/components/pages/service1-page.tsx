import React, { FC } from 'react';
import Header from '../templates/header/component';
import Footer from '../templates/footer/component';
import ServicePage1Template from '../templates/service1-page/component';

const Service1Page: FC = () => (
  <>
    <Header line />
    <ServicePage1Template />
    <Footer />
  </>
);

export default Service1Page;
