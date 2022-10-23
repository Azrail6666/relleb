import React, { FC } from 'react';
import styled from './style.module.scss';
import ChatIcon from './chat.svg';
import TrustpilotForm from '../trustpilot-form/component';

class FormBanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { props, state } = this;
        return (
          <div className={styled.formBannerMain}>
            <div className={styled.formBannerImage} />
            <div className={styled.requestQuestion}>
              <span>Any questions?</span>
              <button type="button">
                <img src={ChatIcon} alt="chat" />
                <span>Chat with an Expert</span>
              </button>
            </div>
          </div>
);
    }
}

export default FormBanner;
