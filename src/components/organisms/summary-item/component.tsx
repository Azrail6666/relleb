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
class SummaryItem extends React.Component<{
    services: {
        name: string,
        price: number,
    }[]
}, {
    total: number
}> {
    constructor(props) {
        super(props);
        this.state = {
            total: 0.0,
        };
    }

    componentDidMount() {
        const { props, state } = this;
        let newTotal = 0.0;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < props.services.length; i++) {
            newTotal += props.services[i].price;
        }
        this.setState({
            total: newTotal,
        });
    }

    render() {
        const { props, state } = this;
      return (
        <div className={`${styled.summaryItem} formStateDiv`}>
          <span className={styled.title}>Summary</span>
          <div className={styled.servicesList}>
            {props.services.map((service) => (
              <div className={styled.serviceItem}>
                <span>{service.name}</span>
                <span>{`€${service.price}`}</span>
              </div>
)) }
          </div>
          <hr />
          <div className={styled.totalItem}>
            <span className={styled.totalTitle}>Total</span>
            <span className={styled.totalValue}>{`€${state.total}`}</span>
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
