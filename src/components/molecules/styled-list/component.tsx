import React, { FC } from 'react';
import styled from './style.module.scss';

class StyledList extends React.Component <any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { props, state } = this;
    return (
      <ul className={styled.list}>
        {props.children}
      </ul>
    );
  }
}

export default StyledList;
