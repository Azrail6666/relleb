import React, { FC } from 'react';
import styled from './style.module.scss';
import Service1Component from '../../organisms/service1-component/component';
import PagesPath from '../../organisms/pages-path/component';

const ServicePage1Template: FC = () => (
  <main className={styled.main}>
    <PagesPath />
    <Service1Component />
  </main>
);

export default ServicePage1Template;
