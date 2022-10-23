import React, { FC } from 'react';
import styled from './style.module.scss';
import Arrow from './arrow.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

const PagesPath: FC = () => (
  <div className={styled.pagesPath}>
    <a>Home</a>
    <img className={styled.arrow} src={Arrow} alt="arrow" />
    <a>Authentication services</a>
    <img className={styled.arrow} src={Arrow} alt="arrow" />
    <a>Order request</a>
  </div>
);

export default PagesPath;
