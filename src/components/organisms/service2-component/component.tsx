import React, { FC } from 'react';
import styled from './style.module.scss';
import CustomerDetailsState from '../customer-details-state/component';
import OrderRequestState from '../order-request-state/component';
import ShippingDetailsState from '../shipping-details-state/component';
import PaymentState from '../payment-state/component';

class Service2Component extends React.Component<any, {
    activeForm: number
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeForm: 3,
        };
        this.nextForm = this.nextForm.bind(this);
        this.setForm = this.setForm.bind(this);
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
              serviceDetailsTitle="All-in-one authentication & buying assistance’ service"
              serviceDetailsDetails={[
                <li>Authentication & Condition <a>report</a> with a certificate</li>,
                <li>Serial number check</li>,
                <li>Theft, Fraud & Loss <a>report</a></li>,
                <li>Customs forms & declaration fulfillment support</li>,
                <li>Easy returns & refunds</li>,
              ]}
              isBanner
            />
            <OrderRequestState
              isHidden={state.activeForm !== 2}
              formNumber={2}
              mainTitleText="Your order request"
              additionalDataText=""
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
            />
            <ShippingDetailsState
              isHidden={state.activeForm !== 3}
              formNumber={3}
              mainTitleText="Shipping method"
              additionalDataText="We will ship your watch to this address after a full inspection & authentication"
              nextFormFunction={this.nextForm}
              setFormFunction={this.setForm}
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
