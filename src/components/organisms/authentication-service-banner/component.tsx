import React, { FC } from 'react';
import styled from './style.module.scss';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

const AuthenticationServiceBanner: FC = () => (
  <section className={styled.section}>
    <div className="container">
      <div className={styled.inner}>
        <h2 className={styled.title}>Verify luxury watches before buying anywhere online</h2>
        <div className={styled.info}>
          <span>
            The first independent pre-purchase watch Inspection & Authentication service
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AuthenticationServiceBanner;
