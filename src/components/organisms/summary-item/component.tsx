import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import ConfirmIcon from './confirm.svg';
import FormStateTitle from '../../molecules/form-state-title/component';
import FormServiceDetails from '../form-service-details/component';
import FormBanner from '../form-banner/component';
import PhoneInput from '../../molecules/phoneInput/component';
import TrustpilotForm from '../trustpilot-form/component';
import CustomerDetailsForm from '../customer-details-form/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// eslint-disable-next-line max-len
class SummaryItem extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { props, state } = this;
      return (
        <div className={`${styled.summaryItem} formStateDiv`}>
          <span className={styled.title}>Summary</span>
          <div className={styled.servicesList}>
            <div className={styled.serviceItem}>
              <span>Service</span>
              <span>€29.00</span>
            </div>
            <div className={styled.serviceItem}>
              <span>Service</span>
              <span>€29.00</span>
            </div>
          </div>
          <hr />
          <div className={styled.totalItem}>
            <span className={styled.totalTitle}>Total</span>
            <span className={styled.totalValue}>€39.00</span>
          </div>
          <div className={styled.summaryAdditionalInfo}>
            <img src={ConfirmIcon} alt="Confirm" />
            <span>Satisfaction guaranteed – 7-days money-back. T&C applied</span>
          </div>
        </div>
    );
  }
}

export default SummaryItem;
