import React, { FC } from 'react';
import Header from '../templates/header/component';
import Footer from '../templates/footer/component';
import FormPageTemplate from '../templates/form-page/component';

const FormPage: FC = () => (
  <>
    <Header line />
    <FormPageTemplate />
    <Footer />
  </>
);

export default FormPage;
