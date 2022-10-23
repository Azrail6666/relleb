import React, { FC } from 'react';
import styled from './style.module.scss';
import Service3Component from '../../organisms/service3-component/component';
import PagesPath from '../../organisms/pages-path/component';

const ServicePage3Template: FC = () => (
  <main className={styled.main}>
    <PagesPath />
    <Service3Component />
  </main>
);

export default ServicePage3Template;
