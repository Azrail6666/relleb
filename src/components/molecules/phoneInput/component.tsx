import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import ArrowDown from './arrow.svg';
import FormStateTitle from '../../molecules/form-state-title/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// eslint-disable-next-line max-len
import axios from 'axios';

class PhoneInput extends React.Component<{
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function,
}, {
    isOpenChangeCountry: boolean,
    phoneCountry: string,
    phoneNumber: string,
    phoneCountries: any,
    countiesNames: any,
}> {
    constructor(props) {
        super(props);
        this.state = {
            isOpenChangeCountry: false,
            phoneCountry: 'UA',
            phoneNumber: '',
            phoneCountries: {},
            countiesNames: {},
        };
        this.changeActiveCountry = this.changeActiveCountry.bind(this);
        this.openCloseChangeActiveCountry = this.openCloseChangeActiveCountry.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://restcountries.com/v2/all',
        }).then((response) => {
            if (response.status) {
                const phoneCountriesTmp = {};
                const countiesNamesTmp = {};
                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < response.data.length; i++) {
                    // eslint-disable-next-line prefer-destructuring,max-len
                    phoneCountriesTmp[response.data[i].alpha2Code] = response.data[i].callingCodes[0];
                    // eslint-disable-next-line prefer-destructuring,max-len
                    countiesNamesTmp[response.data[i].alpha2Code] = response.data[i].name;
                }
                this.setState({
                    phoneCountries: phoneCountriesTmp,
                    countiesNames: countiesNamesTmp,
                });
            }
        });
    }

    openCloseChangeActiveCountry() {
        this.setState({
            // eslint-disable-next-line max-len
            // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
            isOpenChangeCountry: !this.state.isOpenChangeCountry,
        });
    }

    changeActiveCountry(target: any) {
        target = target.target as HTMLButtonElement;
        this.setState({
            isOpenChangeCountry: false,
            phoneCountry: target.id,
        });
    }

    changeValue(target: any) {
        target = target.target as HTMLInputElement;
        // eslint-disable-next-line max-len
        // eslint-disable-next-line max-len,react/no-access-state-in-setstate,react/destructuring-assignment
        const newValue = target.value.substring(this.state.phoneCountries[this.state.phoneCountry].length + 4, target.value.length);
        // eslint-disable-next-line react/destructuring-assignment,max-len
        this.props.onChange(this.state.phoneCountry, newValue);
        // eslint-disable-next-line react/destructuring-assignment
        this.setState({
            // eslint-disable-next-line max-len
            // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate,max-len
            phoneNumber: newValue,
        });
    }

    render() {
        const { props, state } = this;
        const options = [];
        // eslint-disable-next-line guard-for-in
        for (const dictKey in state.phoneCountries) {
            // @ts-ignore
            const countryImage = <img id={dictKey} key={dictKey} src={`https://countryflagsapi.com/svg/${dictKey}`} alt={dictKey} />;
            const countryNameText = <span id={dictKey} key={dictKey}>{`+${state.phoneCountries[dictKey]} ${state.countiesNames[dictKey]}`}</span>;
            // eslint-disable-next-line max-len
            const countryLine = <button type="button" id={dictKey} key={dictKey} className={styled.countryLine} onClick={this.changeActiveCountry}>{[countryImage, countryNameText]}</button>;
            // @ts-ignore
            options.push(countryLine);
        }
      return (
        <div className={styled.formInputWithLabel}>
          <span className={styled.formInputLabel}>Phone (optional):</span>
          <div className={styled.formInputWithSelect}>
            <button type="button" className={styled.selectCountry} onClick={this.openCloseChangeActiveCountry}>
              <img className={styled.selectedCountry} src={`https://countryflagsapi.com/svg/${state.phoneCountry}`} alt={state.phoneCountry} />
              <img className={styled.arrowDown} src={ArrowDown} alt="Arrow down" />
            </button>
            <input value={`(+${state.phoneCountries[state.phoneCountry]}) ${state.phoneNumber}`} onChange={this.changeValue} />
            {
                  state.isOpenChangeCountry ? (
                    <div className={styled.countryLines}>
                      {options}
                    </div>
) : undefined
              }
          </div>
        </div>
    );
  }
}

export default PhoneInput;
