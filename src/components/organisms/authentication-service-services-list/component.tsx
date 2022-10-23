import React, { FC } from 'react';
import styled from './style.module.scss';
import InfoIcon from './info.svg';
import YesIcon from './yesIcon.svg';
import NoIcon from './noIcon.svg';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';
import { Link } from 'react-router-dom';
import TrustpilotForm from '../trustpilot-form/component';

class AuthenticationServiceServices extends React.Component <any, {
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
            <div className={styled.authenticationServiceDescription}>
              <span>Listing review online</span>
              <ul>
                <li>One listing review by an expert watchmaker & AI-tool</li>
                <li>Identify signs of fakes and defects by photos</li>
                <li>Seller background check</li>
              </ul>
            </div>
            <div className={styled.authenticationServiceDescription}>
              <span>Buying assistance</span>
              <ul>
                {/* eslint-disable-next-line max-len */}
                <li>Relleb buying agent who communicates with seller on your behalf, and represent your interests</li>
                <li>Better price negotiation</li>
                <li>Secure transaction via Relleb Escrow</li>
              </ul>
            </div>
            <div className={styled.authenticationServiceDescription}>
              {/* eslint-disable-next-line max-len */}
              <span>Physical Inspection and Authentication – <a>X datapoints, 1 business day</a></span>
              <ul>
                <li>Authentication & Condition report with a certificate</li>
                <li>Serial number check</li>
                <li>Theft, Fraud & Loss report</li>
              </ul>
            </div>
            <div className={styled.authenticationServiceDescription}>
              <span>Shipping & Returns</span>
              <ul>
                <li>FeDex tracked priority shipping & optional insurance</li>
                <li>Customs forms & declaration fulfillment support</li>
                <li>Easy returns & refunds</li>
              </ul>
            </div>
          </div>
          <div className={styled.authenticationServicesTable}>
            <div className={styled.authenticationServiceRow}>
              <div className={styled.authenticationServiceHeader}>
                <div className={styled.authenticationServiceTopInfo}>
                  <span>39 €</span>
                  <img src={InfoIcon} alt="Info" />
                </div>
                {/* eslint-disable-next-line max-len */}
                <span className={styled.authenticationServiceHeaderTitle}>Listing review by a watchmaker</span>
                <hr />
              </div>
              <div className={styled.authenticationServiceHeader}>
                <span className={styled.popular}>Most popular</span>
                <div className={styled.authenticationServiceTopInfo}>
                  <img src={InfoIcon} alt="Info" />
                </div>
                {/* eslint-disable-next-line max-len */}
                <span className={styled.authenticationServiceHeaderTitle}>Physical Inspection & Authentication</span>
                <hr />
              </div>
              <div className={styled.authenticationServiceHeader}>
                <div className={styled.authenticationServiceTopInfo}>
                  <img src={InfoIcon} alt="Info" />
                </div>
                {/* eslint-disable-next-line max-len */}
                <span className={styled.authenticationServiceHeaderTitle}>All-in-one authentication & buying assistance</span>
                <hr />
              </div>
            </div>
            <div className={styled.authenticationServiceRow}>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
              <div className={styled.authenticationServiceNo}>
                <img src={NoIcon} alt="no" />
              </div>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
            </div>
            <div className={styled.authenticationServiceRow}>
              <div className={styled.authenticationServiceNo}>
                <img src={NoIcon} alt="no" />
              </div>
              <div className={styled.authenticationServiceNo}>
                <img src={NoIcon} alt="no" />
              </div>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
            </div>
            <div className={styled.authenticationServiceRow}>
              <div className={styled.authenticationServiceNo}>
                <img src={NoIcon} alt="no" />
              </div>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
            </div>
            <div className={styled.authenticationServiceRow}>
              <div className={styled.authenticationServiceNo}>
                <img src={NoIcon} alt="no" />
              </div>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
              <div className={styled.authenticationServiceYes}>
                <img src={YesIcon} alt="yes" />
              </div>
            </div>
            <div className={styled.authenticationServiceRowButtons}>
              <Link to="/service1" className={styled.buyNow}>BUY NOW</Link>
              <Link to="/service2" className={styled.getQuote}>GET A QUOTE</Link>
              <Link to="/service3" className={styled.getQuote}>GET A QUOTE</Link>
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
          <div className={styled.authenticationServiceOneMobile}>
            <div className={styled.authenticationServiceOneMobileInfo}>
              <div className={styled.authenticationServiceTopInfo}>
                <span>39 €</span>
                <img src={InfoIcon} alt="Info" />
              </div>
              {/* eslint-disable-next-line max-len */}
              <span className={styled.authenticationServiceHeaderTitleMobile}>Listing review by a watchmaker</span>
              <div>
                <button id="0" type="button" className={styled.openIcon} onClick={this.openCloseOneData}>
                  <img id="0" src={state.openedStatuses[0] ? MinusIcon : PlusIcon} alt="plus" />
                </button>
              </div>
            </div>
            { state.openedStatuses[0] ? (
              <div className={styled.authenticationServiceYesMobile}>
                <div className={styled.authenticationServiceYesMobileData}>
                  <span>Listing review online</span>
                  <ul>
                    <li>One listing review by an expert watchmaker & AI-tool</li>
                    <li>Identify signs of fakes and defects by photos</li>
                    <li>Seller background check</li>
                  </ul>
                </div>
                <div className={styled.authenticationServiceYesMobileIcon}>
                  <img src={YesIcon} alt="yes" />
                </div>
              </div>
            ) : undefined
            }
            <Link to="/service1" className={styled.buyNowMobile}>BUY NOW</Link>
          </div>
          <div className={styled.authenticationServiceOneMobile}>
            <div className={styled.authenticationServiceOneMobileInfo}>
              <span className={styled.mostPopularMobile}>Most popular</span>
              <div className={styled.authenticationServiceTopInfo}>
                <img src={InfoIcon} alt="Info" />
              </div>
              {/* eslint-disable-next-line max-len */}
              <span className={styled.authenticationServiceHeaderTitleMobile}>Physical Inspection & Authentication</span>
              <div>
                <button id="1" type="button" className={styled.openIcon} onClick={this.openCloseOneData}>
                  <img id="1" src={state.openedStatuses[1] ? MinusIcon : PlusIcon} alt="plus" />
                </button>
              </div>
            </div>
            { state.openedStatuses[1] ? (
              <>
                <div className={styled.authenticationServiceYesMobile}>
                  <div className={styled.authenticationServiceYesMobileData}>
                    {/* eslint-disable-next-line max-len */}
                    <span>Physical Inspection and Authentication – <a>X datapoints, 1 business day</a></span>
                    <ul>
                      <li>Authentication & Condition report with a certificate</li>
                      <li>Serial number check</li>
                      <li>Theft, Fraud & Loss report</li>
                    </ul>
                  </div>
                  <div className={styled.authenticationServiceYesMobileIcon}>
                    <img src={YesIcon} alt="yes" />
                  </div>
                </div>
                <div className={styled.authenticationServiceYesMobile}>
                  <div className={styled.authenticationServiceYesMobileData}>
                    <span>Shipping & Returns</span>
                    <ul>
                      <li>FeDex tracked priority shipping & optional insurance</li>
                      <li>Customs forms & declaration fulfillment support</li>
                      <li>TEasy returns & refunds</li>
                    </ul>
                  </div>
                  <div className={styled.authenticationServiceYesMobileIcon}>
                    <img src={YesIcon} alt="yes" />
                  </div>
                </div>
              </>
            ) : undefined
            }
            <Link to="/service2" className={styled.getQuoteMobile}>GET A QUOTE</Link>
          </div>
          <div className={styled.authenticationServiceOneMobile}>
            <div className={styled.authenticationServiceOneMobileInfo}>
              <div className={styled.authenticationServiceTopInfo}>
                <img src={InfoIcon} alt="Info" />
              </div>
              {/* eslint-disable-next-line max-len */}
              <span className={styled.authenticationServiceHeaderTitleMobile}>All-in-one authentication & buying assistance</span>
              <div>
                <button id="2" type="button" className={styled.openIcon} onClick={this.openCloseOneData}>
                  <img id="2" src={state.openedStatuses[2] ? MinusIcon : PlusIcon} alt="plus" />
                </button>
              </div>
            </div>
            <Link to="/service3" className={styled.getQuoteMobile}>GET A QUOTE</Link>
          </div>
        </div>
      );
  }
}

export default AuthenticationServiceServices;
