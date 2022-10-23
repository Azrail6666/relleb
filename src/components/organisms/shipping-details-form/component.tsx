import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import InfoIcon from './info.svg';
import DeleteIcon from './deleteIcon.svg';
import OptionsWithLabel from '../../molecules/options-label/component';
import FormStateTitle from '../../molecules/form-state-title/component';
import PhoneInput from '../../molecules/phoneInput/component';
import TrustpilotForm from '../trustpilot-form/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// eslint-disable-next-line max-len
class ShippingDetailsForm extends React.Component<{
    // eslint-disable-next-line @typescript-eslint/ban-types
    confirmFormFilledFunction: Function,
    country: string,
    city: string,
    street: string,
    apartment: string,
    zipPostal: string,
    shippingMethod: string,
    coverage: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setShippingFunction: Function,
}, {
    country: string,
    city: string,
    street: string,
    apartment: string,
    zipPostal: string,
    shippingMethod: string,
    coverage: string,
}> {
    constructor(props) {
        super(props);
        this.state = {
            country: props.country,
            city: props.city,
            street: props.street,
            apartment: props.apartment,
            zipPostal: props.zipPostal,
            shippingMethod: props.shippingMethod,
            coverage: props.coverage,
        };
        this.validateForm = this.validateForm.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changeOption = this.changeOption.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    validateForm() {
        const { props, state } = this;
        if (state.country && state.city && state.street && state.apartment && state.zipPostal) {
            // eslint-disable-next-line max-len
            props.setShippingFunction(state.country, state.city, state.street, state.apartment, state.zipPostal, state.shippingMethod, state.coverage);
            props.confirmFormFilledFunction();
        }
    }

    changeValue(target) {
        target = target.target as HTMLInputElement;
        const name = target.id;
        const { value } = target;
        // @ts-ignore
        this.setState({
            // @ts-ignore
            // eslint-disable-next-line react/no-unused-state
            [name]: value,
        });
    }

    changeOption(optionName: string, currentValue: string | boolean) {
        // @ts-ignore
        this.setState({
            [optionName]: currentValue,
        });
    }

    render() {
        const { props, state } = this;
      return (
        <div className={`${styled.formMain} formStateDiv`}>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Country</span>
            <input
              id="country"
              className={styled.formInput}
              placeholder="Enter your Country"
              value={state.country}
              onChange={this.changeValue}
            />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>City</span>
            <input
              id="city"
              className={styled.formInput}
              placeholder="Enter your City"
              value={state.city}
              onChange={this.changeValue}
            />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Street & house number</span>
            <input
              id="street"
              className={styled.formInput}
              placeholder="Enter your Street"
              value={state.street}
              onChange={this.changeValue}
            />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Apartment number & addition (optional)</span>
            <input
              id="apartment"
              className={styled.formInput}
              placeholder="Enter your Apartment number"
              value={state.apartment}
              onChange={this.changeValue}
            />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>ZIP / Postal Code</span>
            <input
              id="zipPostal"
              className={styled.formInput}
              placeholder="Enter your ZIP / Postal Code"
              value={state.zipPostal}
              onChange={this.changeValue}
            />
          </div>
          <OptionsWithLabel
            name="shippingMethod"
            title="Shipping method"
            items={[
              {
                  name: 'FeDex tracked priority shipping',
                  price: '15 €',
                  value: 'fedex',
              },
          ]}
            currentValue={state.shippingMethod}
            onChange={this.changeOption}
          />
          <OptionsWithLabel
            name="coverage"
            title="Do you want to insure one-way shipment from Relleb to you?"
            items={[
                    {
                        name: '€5.000 Coverage',
                        price: '50 €',
                        value: '5000',
                    },
                {
                    name: '€10.000 Coverage',
                    price: '100 €',
                    value: '10000',
                },
                    {
                        name: 'No',
                        price: '',
                        value: 'no',
                    },
                ]}
            currentValue={state.coverage}
            onChange={this.changeOption}
          />
          <button type="button" className={styled.formButton} onClick={this.validateForm}>Continue</button>
        </div>
    );
  }
}

export default ShippingDetailsForm;
