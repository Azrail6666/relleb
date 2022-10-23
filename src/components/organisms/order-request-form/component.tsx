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
class OrderRequestForm extends React.Component<{
    // eslint-disable-next-line @typescript-eslint/ban-types
    confirmFormFilledFunction: Function,
}, {
    inputsValues: string[]
}> {
    constructor(props) {
        super(props);
        this.state = {
            inputsValues: [
                '',
            ],
        };
        this.validateForm = this.validateForm.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.addNewInput = this.addNewInput.bind(this);
        this.deleteInput = this.deleteInput.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    validateForm() {
        const { props, state } = this;
        props.confirmFormFilledFunction();
    }

    changeValue(target: any) {
        const { props, state } = this;
        const changedElement = target.target as HTMLInputElement;
        const newInputValues = state.inputsValues;
        // @ts-ignore
        newInputValues[parseInt(changedElement.id, 10)] = changedElement.value;
        this.setState({
            inputsValues: newInputValues,
        });
    }

    addNewInput() {
        const { props, state } = this;
        const newInputValues = state.inputsValues;
        newInputValues.push('');
        this.setState({
            inputsValues: newInputValues,
        });
    }

    deleteInput(target: any) {
        const changedElement = target.target as HTMLButtonElement;
        const { props, state } = this;
        const newInputValues = state.inputsValues;
        newInputValues.splice(parseInt(changedElement.id, 10), 1);
        this.setState({
            inputsValues: newInputValues,
        });
    }

    render() {
        const { props, state } = this;
      return (
        <div className={`${styled.formMain} formStateDiv`}>
          <div className={styled.formTitleLine}>
            <span>Please specify listing(s) you need to verify? </span>
          </div>
          <div className={styled.linksInputs}>
            {state.inputsValues.map((inputValue, index) => {
                  if (index === 0) {
                      /* eslint-disable-next-line react/no-array-index-key */
                      return (
                        <input
                          id={String(index)}
                          key={String(index)}
                          className={styled.formLinkInput}
                          placeholder="Enter link (URL) of a watch listing page"
                          value={inputValue}
                          onChange={this.changeValue}
                        />
);
                  }

                      /* eslint-disable-next-line react/no-array-index-key */
                return (
                  <div className={styled.inputWithDel}><input
                    id={String(index)}
                    key={String(index)}
                    placeholder="Enter link (URL) of a watch listing page"
                    value={inputValue}
                    onChange={this.changeValue}
                  /> <button id={String(index)} type="button" onClick={this.deleteInput}><img id={String(index)} src={DeleteIcon} alt="Del" /></button>
                  </div>
);
              })}
            <button type="button" className={styled.addNewLine} onClick={this.addNewInput}>+ Add one more listing</button>
          </div>
          <input className={styled.mainInput} placeholder="Comments (optional)" />
          <OptionsWithLabel
            title="Do you want to check serial number against international Theft, Fraud & Loss database?"
            items={[
              {
                  status: false,
                  value: 'Theft, Fraud & Loss report',
                  price: '15 €',
              },
                {
                    status: true,
                    value: 'No',
                    price: '',
                },
          ]}
          />
          <OptionsWithLabel
            title="Do you want Relleb to suggest alternative watch listings based on your criteria?"
            items={[
                    {
                        status: false,
                        value: 'Yes',
                        price: 'Free',
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

export default OrderRequestForm;
