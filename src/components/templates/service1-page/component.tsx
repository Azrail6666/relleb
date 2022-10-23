import React, { FC } from 'react';
import styled from './style.module.scss';
import FormComponent from '../../organisms/form-component/component';
import PagesPath from '../../organisms/pages-path/component';

const FormPageTemplate: FC = () => (
  <main className={styled.main}>
    <PagesPath />
    <FormComponent />
  </main>
);

export default FormPageTemplate;
