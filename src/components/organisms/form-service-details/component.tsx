import React, { FC } from 'react';
import styled from './style.module.scss';
import TrustpilotForm from '../trustpilot-form/component';
import StyledList from '../../molecules/styled-list/component';

class FormServiceDetails extends React.Component<{
    serviceTitle: string,
    serviceDetails: any[]
}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { props, state } = this;
        return (
          <div className={`${styled.additionalInfo} formStateDiv`}>
            {/* eslint-disable-next-line max-len */}
            <div className={styled.infoData}>
              <span className={styled.additionalInfoTitle}>{props.serviceTitle}</span>
              <StyledList>
                {props.serviceDetails}
              </StyledList>
              <hr />
            </div>
            <TrustpilotForm />
          </div>
);
    }
}

export default FormServiceDetails;
