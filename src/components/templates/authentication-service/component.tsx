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
    <AuthenticationServiceServices />
    <AuthenticationServiceGuaranteed />
  </main>
);

export default AuthenticationService;
