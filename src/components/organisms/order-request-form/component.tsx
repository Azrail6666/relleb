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
import { stat } from 'fs';

// eslint-disable-next-line max-len
class OrderRequestForm extends React.Component<{
    // eslint-disable-next-line @typescript-eslint/ban-types
    confirmFormFilledFunction: Function,
    isTheftFraudLoss: boolean,
    suggestAlternative: boolean,
    links: string[],
    isTheftFraudLossStatus: boolean,
    suggestAlternativeStatus: boolean,
    comments: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setOrderRequestFunction: Function,
}, {
    inputsValues: string[],
    comments: string,
    isTheftFraudLossStatus: boolean,
    suggestAlternativeStatus: boolean,
}> {
    constructor(props) {
        super(props);
        this.state = {
            inputsValues: props.links,
            comments: props.comments,
            isTheftFraudLossStatus: props.isTheftFraudLossStatus,
            suggestAlternativeStatus: props.suggestAlternativeStatus,
        };
        this.validateForm = this.validateForm.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.addNewInput = this.addNewInput.bind(this);
        this.deleteInput = this.deleteInput.bind(this);
        this.changeValueComments = this.changeValueComments.bind(this);
        this.changeOption = this.changeOption.bind(this);
    }

    // eslint-disable-next-line class-methods-use-this
    validateForm() {
        const { props, state } = this;
        const newLinks = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < state.inputsValues.length; i++) {
            if (state.inputsValues[i]) {
                // @ts-ignore
                newLinks.push(state.inputsValues[i]);
            }
        }
        if (newLinks.length) {
            console.log(state);
            // eslint-disable-next-line max-len
            props.setOrderRequestFunction(newLinks, state.comments, state.isTheftFraudLossStatus, state.suggestAlternativeStatus);
            props.confirmFormFilledFunction();
        }
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

    changeValueComments(target: any) {
        target = target.target as HTMLInputElement;
        this.setState({
            comments: target.value,
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
          <input className={styled.mainInput} placeholder="Comments (optional)" value={state.comments} onChange={this.changeValueComments} />
          {props.isTheftFraudLoss ? (
            <OptionsWithLabel
              name="isTheftFraudLossStatus"
              title="Do you want to check serial number against international Theft, Fraud & Loss database?"
              items={[
              {
                  name: 'Theft, Fraud & Loss report',
                  price: '15 €',
                  value: true,
              },
                {
                    name: 'No',
                    price: '',
                    value: false,
                },
          ]}
              currentValue={state.isTheftFraudLossStatus}
              onChange={this.changeOption}
            />
) : undefined }
          { props.suggestAlternative ? (
            <OptionsWithLabel
              name="suggestAlternativeStatus"
              title="Do you want Relleb to suggest alternative watch listings based on your criteria?"
              items={[
                    {
                        name: 'Yes',
                        price: 'Free',
                        value: true,
                    },
                    {
                        name: 'No',
                        price: '',
                        value: false,
                    },
                ]}
              currentValue={state.suggestAlternativeStatus}
              onChange={this.changeOption}
            />
) : undefined }
          <button type="button" className={styled.formButton} onClick={this.validateForm}>Continue</button>
        </div>
    );
  }
}

export default OrderRequestForm;
