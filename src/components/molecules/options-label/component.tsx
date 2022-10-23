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
class OptionsWithLabel extends React.Component<{ title: string, items: {status: boolean, value: string, price: string}[] }, {
    items: {status: boolean, value: string, price: string}[]
}> {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        };
        this.changeOption = this.changeOption.bind(this);
    }

    changeOption(target: any) {
        const { props, state } = this;
        target = target.target as HTMLButtonElement;
        const newItems = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < state.items.length; i++) {
            const item = state.items[i];
            item.status = i === parseInt(target.id, 10);
            // @ts-ignore
            newItems.push(item);
        }
        this.setState({
            items: newItems,
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
                      className={item.status ? styled.selectableOptionActive : styled.selectableOption}
                      id={String(index)}
                      key={String(index)}
                      type="button"
                      onClick={this.changeOption}
                    >
                      <div id={String(index)} className={styled.selectTitle}>
                        {/* eslint-disable-next-line max-len */}
                        <div id={String(index)} className={item.status ? styled.selected : styled.noSelected}>
                          <div id={String(index)} />
                        </div>
                        {/* eslint-disable-next-line max-len */}
                        <span id={String(index)} className={styled.valueSelected}>{item.value}</span>
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
