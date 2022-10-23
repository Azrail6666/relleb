import React, { FC } from 'react';
import styled from './style.module.scss';

import Rating from '../../molecules/rating/component';

const TrustpilotForm: FC = () => (
  <div className={styled.trustpilot}>
    <span>Rated <a>excellent</a></span>
    <div />
  </div>
);

export default TrustpilotForm;
