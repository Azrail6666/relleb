import React, { FC } from 'react';
import styled from './style.module.scss';
import CustomerDetailsState from '../customer-details-state/component';
import OrderRequestState from '../order-request-state/component';
import ShippingDetailsState from '../shipping-details-state/component';
import PaymentState from '../payment-state/component';

class Service1Component extends React.Component<any, {
    activeForm: number,
    fullName: string,
    emailAddress: string,
    phoneNumber: string,
    phoneCountry: any,
    links: string[],
    isTheftFraudLossStatus: boolean,
    suggestAlternativeStatus: boolean,
    comments: string,
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
        };
        this.nextForm = this.nextForm.bind(this);
        this.setForm = this.setForm.bind(this);
        this.setCustomerDetails = this.setCustomerDetails.bind(this);
        this.setOrderRequest = this.setOrderRequest.bind(this);
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
    setOrderRequest(newLinks: string[], newComments: string, newIsTheftFraudLossStatus: boolean, newSuggestAlternativeStatus: boolean) {
        this.setState({
            links: newLinks,
            isTheftFraudLossStatus: newIsTheftFraudLossStatus,
            suggestAlternativeStatus: newSuggestAlternativeStatus,
            comments: newComments,
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
              serviceDetailsTitle=""
              serviceDetailsDetails={[]}
              isBanner={false}
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
              serviceDetailsTitle="Listing review by a watchmaker service"
              serviceDetailsDetails={[
                <li>One listing review by an expert watchmaker & AI-tool</li>,
                <li>Identify signs of fakes and defects by photos</li>,
                <li>Seller background check</li>,
              ]}
              isTheftFraudLoss={false}
              suggestAlternative={false}
              links={state.links}
              isTheftFraudLossStatus={state.isTheftFraudLossStatus}
              suggestAlternativeStatus={state.suggestAlternativeStatus}
              comments={state.comments}
              setOrderRequestFunction={this.setOrderRequest}
            />
            <PaymentState
              isHidden={state.activeForm !== 3}
              formNumber={3}
              mainTitleText="Payment"
              additionalDataText=""
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
            />
          </div>
);
    }
}

export default Service1Component;
