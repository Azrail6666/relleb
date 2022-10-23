import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import FormStateTitle from '../../molecules/form-state-title/component';
import SummaryItem from '../summary-item/component';
import SecureIcon from './secureIcon.svg';
import StripeLogo from './stripe.png';
import VisaLogo from './visa.png';
import DiscoverLogo from './discover.png';
import MasterCardLogo from './masterCard.png';
import AMEXLogo from './amEx.png';
import FormServiceDetails from '../form-service-details/component';
import OrderRequestForm from '../order-request-form/component';
import FormBanner from '../form-banner/component';
import PhoneInput from '../../molecules/phoneInput/component';
import TrustpilotForm from '../trustpilot-form/component';
import CustomerDetailsForm from '../customer-details-form/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// eslint-disable-next-line max-len
class PaymentState extends React.Component<{
    isHidden: boolean,
    formNumber: number,
    mainTitleText: string,
    additionalDataText: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    nextFormFunction: Function,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setFormFunction: Function
}, any> {
    constructor(props) {
        super(props);
        this.state = {
            filled: false,
        };
        this.confirmFormFilled = this.confirmFormFilled.bind(this);
    }

    confirmFormFilled() {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.nextFormFunction();
        this.setState({
            filled: true,
        });
    }

    render() {
        const { props, state } = this;
        return (
          <div className={styled.formState}>
            <FormStateTitle
              filled={state.filled}
              isHidden={props.isHidden}
              formNumber={props.formNumber}
              mainTitleText={props.mainTitleText}
              additionalDataText={props.additionalDataText}
              setFormFunction={props.setFormFunction}
            />
            {!props.isHidden ? (
              <div className="formStateContent">
                <SummaryItem />
                <div className="formStateDiv" />
                <div className={`formStateDiv ${styled.paymentForm}`}>
                  <a className={styled.formButton}>SUBMIT & PAY</a>
                  {/* eslint-disable-next-line max-len */}
                  <span className={styled.formAdditionalButtonInfo}>You will be redirected toa payment page</span>
                  <hr />
                  <div className={styled.paymentVerified}>
                    <div className={styled.securePayments}>
                      <img src={SecureIcon} alt="Secure" />
                      <span>Secure payments</span>
                    </div>
                    <img className={styled.paymentLogo} src={StripeLogo} alt="Stripe" />
                    <img className={styled.paymentLogo} src={VisaLogo} alt="Visa" />
                    <img className={styled.paymentLogo} src={DiscoverLogo} alt="Discover" />
                    <img className={styled.paymentLogo} src={MasterCardLogo} alt="MasterCard" />
                    <img className={styled.paymentLogo} src={AMEXLogo} alt="AM EX" />
                  </div>
                </div>
                <div className="formStateDiv" />
              </div>
                ) : undefined}
          </div>
        );
    }
}

export default PaymentState;
