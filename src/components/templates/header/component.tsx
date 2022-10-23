import React, { FC, useRef } from 'react';
import styled from './style.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { change, headerHeight } from './headerSlice';

import Nav from '../../organisms/nav/component';
import ModalAlert from '../../organisms/modal-alert/component';
import ScrollLine from '../../molecules/scroll-line/component';

const Header: FC<IHeader> = ({ line }) => {
  const dispatch = useDispatch();
  const headerHeightState = useSelector(headerHeight);

  const header = useRef<HTMLInputElement>(null);

  const alertCallback = () => {
    const h = header.current?.offsetHeight || 0;
    dispatch(change(h));
  };

  return (
    <>
      <header className={`${styled.header}`} ref={header}>
        <ModalAlert
          img="img/modal-alert/1.png"
          button="Lets go"
          text="Watch authentication calculator"
          callback={alertCallback}
        />

        <ModalAlert
          img="img/modal-alert/2.png"
          button="Lets go"
          text="Watch authentication calculator"
          light
          callback={alertCallback}
        />

        <ModalAlert
          button="Lets go"
          text="Watch authentication calculator"
          callback={alertCallback}
        />

        <ModalAlert
          img="img/modal-alert/3.png"
          button="Lets go"
          text="Watch authentication calculator"
          light
          callback={alertCallback}
        />
        <div className="container">
          <Nav />
        </div>
        {line && (
          <div className="container">
            <ScrollLine />
          </div>
        )}
      </header>
    </>
  );
};

interface IHeader {
  line?: boolean;
}

Header.defaultProps = {
  line: false,
};

export default Header;
