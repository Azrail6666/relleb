import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import ArrowDown from './arrow.svg';
import FormStateTitle from '../../molecules/form-state-title/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// eslint-disable-next-line max-len
import axios from 'axios';

// eslint-disable-next-line max-len
class OptionsWithLabel extends React.Component<{
    name: string,
    title: string,
    currentValue: boolean | string,
    items: {name: string, price: string, value: boolean | string}[],
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function,
}
    , {
    currentValue: boolean | string,
    items: {name: string, price: string, value: boolean | string}[]
}> {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: props.currentValue,
            items: props.items,
        };
        this.changeOption = this.changeOption.bind(this);
    }

    changeOption(target: any) {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const { props, state } = this;
        target = target.target as HTMLButtonElement;
        const newCurrentValue = state.items[parseInt(target.id, 10)].value;
        props.onChange(props.name, newCurrentValue);
        this.setState({
            currentValue: newCurrentValue,
        });
    }

    render() {
        const { props, state } = this;
      return (
        <div className={styled.formSelectOptions}>
          {/* eslint-disable-next-line max-len */}
          <span className={styled.title}>{props.title}</span>
          <div className={styled.selectableOptions}>
            {
                  state.items.map((item, index) => (
                    <button
                        /* eslint-disable-next-line max-len */
                      className={item.value === state.currentValue ? styled.selectableOptionActive : styled.selectableOption}
                      id={String(index)}
                      key={String(index)}
                      type="button"
                      onClick={this.changeOption}
                    >
                      <div id={String(index)} className={styled.selectTitle}>
                        {/* eslint-disable-next-line max-len */}
                        <div id={String(index)} className={item.value === state.currentValue ? styled.selected : styled.noSelected}>
                          <div id={String(index)} />
                        </div>
                        {/* eslint-disable-next-line max-len */}
                        <span id={String(index)} className={styled.valueSelected}>{item.name}</span>
                      </div>
                      {/* eslint-disable-next-line max-len */}
                      {item.price ? <span id={String(index)} className={styled.selectableOptionPrice}>{item.price}</span> : undefined}
                    </button>
))
              }
          </div>
        </div>
    );
  }
}

export default OptionsWithLabel;
