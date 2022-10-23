import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import FormStateTitle from '../../molecules/form-state-title/component';
import PhoneInput from '../../molecules/phoneInput/component';
import TrustpilotForm from '../trustpilot-form/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';
import parsePhoneNumber from 'libphonenumber-js';

// eslint-disable-next-line max-len
class CustomerDetailsForm extends React.Component<{
    // eslint-disable-next-line @typescript-eslint/ban-types
    confirmFormFilledFunction: Function,
}, {
    fullName: string,
    emailAddress: string,
    phoneNumber: string,
    phoneCountry: any
}> {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            emailAddress: '',
            phoneNumber: '',
            phoneCountry: '',
        };
        this.validateForm = this.validateForm.bind(this);
        this.changeFullName = this.changeFullName.bind(this);
        this.changeEmailAddress = this.changeEmailAddress.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    validateForm() {
        const { props, state } = this;
        const phoneNumber = parsePhoneNumber(state.phoneNumber, state.phoneCountry);
        // eslint-disable-next-line max-len
        if (state.fullName.length > 3 &&
        String(state.emailAddress)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && (!state.phoneNumber.length || phoneNumber?.isValid())) {
            props.confirmFormFilledFunction();
        }
    }

    changeFullName(target: any) {
        target = target.target as HTMLInputElement;
        this.setState({
            fullName: target.value,
        });
    }

    changeEmailAddress(target: any) {
        target = target.target as HTMLInputElement;
        this.setState({
            emailAddress: target.value,
        });
    }

    changePhoneNumber(newPhoneCountry: any, newPhoneNumber: string) {
        this.setState({
            phoneCountry: newPhoneCountry,
            phoneNumber: newPhoneNumber,
        });
    }

    render() {
        const { props, state } = this;
      return (
        <div className={`${styled.formMain} formStateDiv`}>
          <hr />
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Full name:</span>
            <input className={styled.formInput} placeholder="Enter your full name" value={state.fullName} onChange={this.changeFullName} />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Email:</span>
            <input className={styled.formInput} placeholder="Enter your Email" value={state.emailAddress} onChange={this.changeEmailAddress} />
          </div>
          <PhoneInput onChange={this.changePhoneNumber} />
          <button type="button" className={styled.formButton} onClick={this.validateForm}>Continue</button>
        </div>
    );
  }
}

export default CustomerDetailsForm;
