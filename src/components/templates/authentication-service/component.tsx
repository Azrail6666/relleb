import React, { FC } from 'react';
import styled from './style.module.scss';
import HomeTitle from '../../organisms/home-title/component';
import HomeSteps from '../../organisms/home-steps/component';
import HomeWatchmakers from '../../organisms/home-watchmakers/component';
import HomeClients from '../../organisms/home-clients/component';
import HomeWatchworlds from '../../organisms/home-watchworlds/component';
import AuthenticationServiceBanner from '../../organisms/authentication-service-banner/component';
import AuthenticationServiceGuaranteed from '../../organisms/authentication-service-guaranteed/component';
import AuthenticationServiceServices from '../../organisms/authentication-service-services-list/component';
import HomeCollections from '../../organisms/home-collections/component';
import HomeKnowledges from '../../organisms/home-knowledges/component';

const AuthenticationService: FC = () => (
  <main className={styled.main}>
    <AuthenticationServiceBanner />
    <AuthenticationServiceServices
      services={[
            {
                title: <span>Listing review online</span>,
                included: [
                  <li>One listing review by an expert watchmaker & AI-tool</li>,
                  <li>Identify signs of fakes and defects by photos</li>,
                  <li>Seller background check</li>,
                ],
            },
          {
              title: <span>Buying assistance</span>,
              included: [
                  // eslint-disable-next-line max-len
                <li>Relleb buying agent who communicates with seller on your behalf, and represent your interests</li>,
                <li>Better price negotiation</li>,
                <li>Secure transaction via Relleb Escrow</li>,
              ],
          },
          {
              // eslint-disable-next-line max-len
              title: <span>Physical Inspection and Authentication – <a>X datapoints, 1 business day</a></span>,
              included: [
                  // eslint-disable-next-line max-len
                <li>Authentication & Condition report with a certificate</li>,
                <li>Serial number check</li>,
                <li>Theft, Fraud & Loss report</li>,
              ],
          },
          {
              title: <span>Shipping & Returns</span>,
              included: [
                <li>FeDex tracked priority shipping & optional insurance</li>,
                <li>Customs forms & declaration fulfillment support</li>,
                <li>Easy returns & refunds</li>,
              ],
          },
        ]}
      programs={[
          {
              title: 'Listing review by a watchmaker',
              price: '39 €',
              topText: '',
          },
          {
              title: 'Physical Inspection & Authentication',
              price: '',
              topText: 'Most popular',
          },
          {
              title: 'All-in-one authentication & buying assistance',
              price: '',
              topText: '',
          },
      ]}
      statuses={[
          [true, false, true],
          [false, false, true],
          [false, true, true],
          [false, true, true],
      ]}
      buttons={[
          { text: 'BUY NOW', link: '/service1', buttonType: 'filled' },
          { text: 'GET A QUOTE', link: '/service2', buttonType: 'no-filled' },
          { text: 'GET A QUOTE', link: '/service3', buttonType: 'no-filled' },
      ]}
    />
    <AuthenticationServiceGuaranteed />
  </main>
);

export default AuthenticationService;
