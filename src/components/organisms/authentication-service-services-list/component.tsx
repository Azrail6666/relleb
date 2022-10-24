import React, { FC } from 'react';
import styled from './style.module.scss';
import InfoIcon from './info.svg';
import YesIcon from './yesIcon.svg';
import NoIcon from './noIcon.svg';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';
import StyledList from '../../molecules/styled-list/component';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';
import { Link } from 'react-router-dom';
import TrustpilotForm from '../trustpilot-form/component';

class AuthenticationServiceServices extends React.Component <{
  services: {
    title: any,
    included: any[]
  }[],
  programs: {
    title: string,
    price: string,
    topText: string,
  }[],
  statuses: boolean[][],
  buttons: {
    text: string,
    link: string,
    buttonType: string
  }[]
}, {
  width: number,
  openedStatuses: boolean[],
}> {
  constructor(props) {
    super(props);
    this.state = {
      width: window.screen.width,
      openedStatuses: [
          false,
          false,
          false,
      ],
    };
    this.onChangeWidth = this.onChangeWidth.bind(this);
    this.openCloseOneData = this.openCloseOneData.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-restricted-globals
    addEventListener('resize', this.onChangeWidth);
  }

  onChangeWidth() {
    this.setState({
      width: window.screen.width,
    });
  }

  openCloseOneData(target: any) {
    const { props, state } = this;
    target = target.target as HTMLButtonElement;
    const newOpenedStatuses = state.openedStatuses;
    newOpenedStatuses[parseInt(target.id, 10)] = !newOpenedStatuses[parseInt(target.id, 10)];
    this.setState({
      openedStatuses: newOpenedStatuses,
    });
  }

  render() {
    const { props, state } = this;
    if (state.width > 800) {
      return (
        <div className={styled.authenticationServiceServices}>
          <div className={styled.authenticationServicesDescriptions}>
            <div className={styled.authenticationServiceDescription} />
            {props.services.map((service) => (
              <div className={styled.authenticationServiceDescription}>
                {service.title}
                <StyledList>
                  {service.included}
                </StyledList>
              </div>
))
            }
          </div>
          <div className={styled.authenticationServicesTable}>
            <div className={styled.authenticationServiceRow}>
              {props.programs.map((program) => (
                <div className={styled.authenticationServiceHeader}>
                  {/* eslint-disable-next-line max-len */}
                  {program.topText ? <span className={styled.popular}>{program.topText}</span> : undefined}
                  <div className={styled.authenticationServiceTopInfo}>
                    {program.price ? <span>{program.price}</span> : undefined}
                    <img src={InfoIcon} alt="Info" />
                  </div>
                  <span className={styled.authenticationServiceHeaderTitle}>{program.title}</span>
                  <hr />
                </div>
))}
            </div>
            {props.statuses.map((oneStatus) => (
              <div className={styled.authenticationServiceRow}>
                {oneStatus.map((oneRowData) => oneRowData ? (
                  <div className={styled.authenticationServiceYes}>
                    <img src={YesIcon} alt="yes" />
                  </div>
) : (
  <div className={styled.authenticationServiceNo}>
    <img src={NoIcon} alt="no" />
  </div>
))}
              </div>
))}
            <div className={styled.authenticationServiceRowButtons}>
              {props.buttons.map((button) => <Link className={button.buttonType === 'filled' ? styled.buyNow : styled.getQuote} to={button.link}>{button.text}</Link>)}
            </div>
            <hr className={styled.enline} />
            <div className={styled.trustpilot}>
              <TrustpilotForm />
            </div>
          </div>
        </div>
      );
    }
      return (
        <div className={styled.authenticationServiceServicesMobile}>
          {props.programs.map((program, index) => {
            const isOpen = state.openedStatuses[index];
            const servicesStatuses = props.statuses[index];
            return (
              <div className={styled.authenticationServiceOneMobile}>
                <div className={styled.authenticationServiceOneMobileInfo}>
                  {/* eslint-disable-next-line max-len */}
                  {program.topText ? <span className={styled.mostPopularMobile}>{program.topText}</span> : undefined}
                  <div className={styled.authenticationServiceTopInfo}>
                    {/* eslint-disable-next-line max-len */}
                    {program.price ? <span>{program.price}</span> : undefined}
                    <img src={InfoIcon} alt="Info" />
                  </div>
                  {/* eslint-disable-next-line max-len */}
                  <span className={styled.authenticationServiceHeaderTitleMobile}>{program.title}</span>
                  <div>
                    <button id={String(index)} type="button" className={styled.openIcon} onClick={this.openCloseOneData}>
                      <img id={String(index)} src={isOpen ? MinusIcon : PlusIcon} alt="plus" />
                    </button>
                  </div>
                </div>
                {isOpen ? (servicesStatuses.map((serviceStatus, idx) => {
                const service = props.services[idx];
                return serviceStatus ? (
                  <div className={styled.authenticationServiceYesMobile}>
                    <div className={styled.authenticationServiceYesMobileData}>
                      <span>{service.title}</span>
                      <StyledList>
                        {service.included}
                      </StyledList>
                    </div>
                    <div className={styled.authenticationServiceYesMobileIcon}>
                      <img src={YesIcon} alt="yes" />
                    </div>
                  </div>
) : undefined;
              })) : undefined}
              </div>
);
          })}
        </div>
      );
  }
}

export default AuthenticationServiceServices;
