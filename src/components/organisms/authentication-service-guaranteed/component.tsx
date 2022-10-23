import React, { FC } from 'react';
import styled from './style.module.scss';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';
import ChatIcon from './chat.svg';
import GuaranteedIcon from './guaranteed.svg';

const AuthenticationServiceGuaranteed: FC = () => (
  <div className={styled.content}>
    <div className={styled.guaranteedIcon}>
      <img src={GuaranteedIcon} alt="Satisfaction guaranteed" />
    </div>
    <div className={styled.mainInfo}>
      <span className={styled.title}>
        Satisfaction guaranteed <span className={styled.blueTitle}>– 7-days money-back</span>
      </span>
      {/* eslint-disable-next-line max-len */}
      <span className={styled.additionalInfo}>* We provide support for returning the watch consistent with sellers policies. If a watch is deemed incorrect, fake or inconsistent with the listing you are assured of 100% money back guarantee. In addition, when you are not happy with our service, we will return your payment for our services. T&C applied.</span>
    </div>
    <hr className={styled.mobileLine} />
    <div className={styled.questionsMenu}>
      <span className={styled.title}>Any questions?</span>
      <button type="button" className={styled.chatButton}>
        <div className={styled.chatIcon}>
          <img src={ChatIcon} alt="Chat" />
        </div>
        <span className={styled.chatButtonText}>
          Chat with an Expert
        </span>
      </button>
    </div>
  </div>
);

export default AuthenticationServiceGuaranteed;
