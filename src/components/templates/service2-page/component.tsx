import React, { FC } from 'react';
import styled from './style.module.scss';
import Service2Component from '../../organisms/service2-component/component';
import PagesPath from '../../organisms/pages-path/component';

const ServicePage2Template: FC = () => (
  <main className={styled.main}>
    <PagesPath />
    <Service2Component />
  </main>
);

export default ServicePage2Template;
