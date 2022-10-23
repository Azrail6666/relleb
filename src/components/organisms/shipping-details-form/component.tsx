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
}, {
    country: string,
    city: string,
    street: string,
    apartment: string,
    zip: string,
}> {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            city: '',
            street: '',
            apartment: '',
            zip: '',
        };
        this.validateForm = this.validateForm.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    validateForm() {
        const { props, state } = this;
        props.confirmFormFilledFunction();
    }

    changeValue(target) {
        target = target.target as HTMLInputElement;
        const name = target.id;
        const { value } = target;
        // @ts-ignore
        this.setState({
            // @ts-ignore
            // eslint-disable-next-line react/no-unused-state
            name: value,
        });
    }

    render() {
        const { props, state } = this;
      return (
        <div className={`${styled.formMain} formStateDiv`}>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Country</span>
            <input id="country" className={styled.formInput} placeholder="Enter your Country" value={state.country} />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>City</span>
            <input id="city" className={styled.formInput} placeholder="Enter your City" value={state.city} />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Street & house number</span>
            <input id="street" className={styled.formInput} placeholder="Enter your Street" value={state.street} />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>Apartment number & addition (optional)</span>
            <input id="apartment" className={styled.formInput} placeholder="Enter your Apartment number" value={state.apartment} />
          </div>
          <div className={styled.formInputWithLabel}>
            <span className={styled.formInputLabel}>ZIP / Postal Code</span>
            <input id="zip" className={styled.formInput} placeholder="Enter your ZIP / Postal Code" value={state.zip} />
          </div>
          <OptionsWithLabel
            title="Shipping method"
            items={[
              {
                  status: true,
                  value: 'FeDex tracked priority shipping',
                  price: '15 €',
              },
          ]}
          />
          <OptionsWithLabel
            title="Do you want to insure one-way shipment from Relleb to you?"
            items={[
                    {
                        status: false,
                        value: '€5.000 Coverage',
                        price: '50 €',
                    },
                {
                    status: false,
                    value: '€10.000 Coverage',
                    price: '100 €',
                },
                    {
                        status: true,
                        value: 'No',
                        price: '',
                    },
                ]}
          />
          <button type="button" className={styled.formButton} onClick={this.validateForm}>Continue</button>
        </div>
    );
  }
}

export default ShippingDetailsForm;
