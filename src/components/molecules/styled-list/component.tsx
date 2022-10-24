import React, { FC } from 'react';
import styled from './style.module.scss';

const UlCheck: FC<IUl> = ({ children, className }) => (
  <ul className={`${styled.ul} ${className}`}>{children}</ul>
);

interface IUl {
  className?: string
  children: React.ReactNode
}

UlCheck.defaultProps = {
  className: '',
};

export default UlCheck;
