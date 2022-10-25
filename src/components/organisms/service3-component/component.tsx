import React, { FC } from 'react';
import styled from './style.module.scss';
import CustomerDetailsState from '../customer-details-state/component';
import OrderRequestState from '../order-request-state/component';
import ShippingDetailsState from '../shipping-details-state/component';
import PaymentState from '../payment-state/component';

class Service2Component extends React.Component<any, {
    activeForm: number,
    fullName: string,
    emailAddress: string,
    phoneNumber: string,
    phoneCountry: any,
    links: string[],
    isTheftFraudLossStatus: boolean,
    suggestAlternativeStatus: boolean,
    comments: string,
    country: string,
    city: string,
    street: string,
    apartment: string,
    zipPostal: string,
    shippingMethod: string,
    coverage: string,
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeForm: 1,
            fullName: '',
            emailAddress: '',
            phoneNumber: '',
            phoneCountry: 'UA',
            links: [
                '',
            ],
            isTheftFraudLossStatus: false,
            suggestAlternativeStatus: false,
            comments: '',
            country: '',
            city: '',
            street: '',
            apartment: '',
            zipPostal: '',
            shippingMethod: 'fedex',
            coverage: 'no',
        };
        this.nextForm = this.nextForm.bind(this);
        this.setForm = this.setForm.bind(this);
        this.setCustomerDetails = this.setCustomerDetails.bind(this);
        this.setOrderRequest = this.setOrderRequest.bind(this);
        this.setShipping = this.setShipping.bind(this);
    }

    // eslint-disable-next-line react/sort-comp
    nextForm() {
        this.setState({
            // eslint-disable-next-line max-len
            // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
            activeForm: this.state.activeForm + 1,
        });
    }

    setForm(target: any) {
        target = target.target as HTMLButtonElement;
        this.setState({
            activeForm: parseInt(target.id, 10),
        });
    }

    // eslint-disable-next-line max-len
    setCustomerDetails(newFullName: string, newEmailAddress: string, newPhoneNumber: string, newPhoneCountry: any) {
        this.setState({
            fullName: newFullName,
            emailAddress: newEmailAddress,
            phoneNumber: newPhoneNumber,
            phoneCountry: newPhoneCountry,
        });
    }

    // eslint-disable-next-line max-len
    setOrderRequest(newLinks: string[], newIsTheftFraudLossStatus: boolean, newSuggestAlternativeStatus: boolean) {
        this.setState({
            links: newLinks,
            isTheftFraudLossStatus: newIsTheftFraudLossStatus,
            suggestAlternativeStatus: newSuggestAlternativeStatus,
        });
    }

    setShipping(newCountry: string,
                newCity: string,
                newStreet: string,
                newApartment: string,
                newZipPostal: string,
                newShippingMethod: string,
                newCoverage: string) {
        this.setState({
            country: newCountry,
            city: newCity,
            street: newStreet,
            apartment: newApartment,
            zipPostal: newZipPostal,
            shippingMethod: newShippingMethod,
            coverage: newCoverage,
        });
    }

    render() {
        const { props, state } = this;
        return (
          <div>
            <CustomerDetailsState
              isHidden={state.activeForm !== 1}
              formNumber={1}
              mainTitleText="Customer details"
              additionalDataText="Your information is kept private and secure"
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
              serviceDetailsTitle="Physical Inspection & Authentication’ service"
              serviceDetailsDetails={[
                <li>The most complete inspection package</li>,
                <li>Authentication & Condition report with a certificate</li>,
                  // eslint-disable-next-line max-len
                <li>Relleb acts as buying agent and handles A-Z communication with seller on customer’s behalf</li>,
                <li>Secure transaction via Relleb Escrow</li>,
                <li>Easy returns & refunds</li>,
                    ]}
              isBanner
              setCustomerDetailsFunction={this.setCustomerDetails}
              fullName={state.fullName}
              emailAddress={state.emailAddress}
              phoneNumber={state.phoneNumber}
              phoneCountry={state.phoneCountry}
            />
            <OrderRequestState
              isHidden={state.activeForm !== 2}
              formNumber={2}
              mainTitleText="Your order request"
              additionalDataText=""
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
              serviceDetailsTitle=""
              serviceDetailsDetails={[]}
              isTheftFraudLoss={false}
              suggestAlternative
              links={state.links}
              isTheftFraudLossStatus={state.isTheftFraudLossStatus}
              suggestAlternativeStatus={state.suggestAlternativeStatus}
              comments={state.comments}
              setOrderRequestFunction={this.setOrderRequest}
            />
            <ShippingDetailsState
              isHidden={state.activeForm !== 3}
              formNumber={3}
              mainTitleText="Shipping method"
              additionalDataText="We will ship your watch to this address after a full inspection & authentication"
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
              country={state.country}
              city={state.city}
              street={state.street}
              apartment={state.apartment}
              zipPostal={state.zipPostal}
              shippingMethod={state.shippingMethod}
              coverage={state.coverage}
              setShippingFunction={this.setShipping}
            />
            <PaymentState
              isHidden={state.activeForm !== 4}
              formNumber={4}
              mainTitleText="Payment"
              additionalDataText=""
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
            />
          </div>
        );
    }
}

export default Service2Component;
