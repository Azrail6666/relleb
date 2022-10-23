import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import FormStateTitle from '../../molecules/form-state-title/component';
import SummaryItem from '../summary-item/component';
import FormServiceDetails from '../form-service-details/component';
import OrderRequestForm from '../order-request-form/component';
import FormBanner from '../form-banner/component';
import PhoneInput from '../../molecules/phoneInput/component';
import TrustpilotForm from '../trustpilot-form/component';
import CustomerDetailsForm from '../customer-details-form/component';
import AdditionalDataIcon from './additionalDataIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// eslint-disable-next-line max-len
class OrderRequestState extends React.Component<{
    isHidden: boolean,
    formNumber: number,
    mainTitleText: string,
    additionalDataText: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    nextFormFunction: Function,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setFormFunction: Function,
    serviceDetailsTitle: string | undefined,
    serviceDetailsDetails: any[] | undefined,
    isTheftFraudLoss: boolean,
    suggestAlternative: boolean,
    links: string[],
    isTheftFraudLossStatus: boolean,
    suggestAlternativeStatus: boolean,
    comments: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setOrderRequestFunction: Function,
}, {
    filled: boolean
}> {
    constructor(props) {
        super(props);
        this.state = {
            filled: false,
        };
        this.confirmFormFilled = this.confirmFormFilled.bind(this);
    }

    confirmFormFilled() {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.nextFormFunction();
        this.setState({
            filled: true,
        });
    }

    render() {
        const { props, state } = this;
        return (
          <div className={styled.formState}>
            <FormStateTitle
              filled={state.filled}
              isHidden={props.isHidden}
              formNumber={props.formNumber}
              mainTitleText={props.mainTitleText}
              additionalDataText={props.additionalDataText}
              setFormFunction={props.setFormFunction}
            />
            {!props.isHidden ? (
              <div className="formStateContent">
                {props.serviceDetailsTitle && props.serviceDetailsDetails ? (
                  <FormServiceDetails
                    serviceTitle={props.serviceDetailsTitle}
                    serviceDetails={props.serviceDetailsDetails}
                  />
                    // eslint-disable-next-line max-len
                    ) : (
                      <OrderRequestForm
                        confirmFormFilledFunction={this.confirmFormFilled}
                        isTheftFraudLoss={props.isTheftFraudLoss}
                        suggestAlternative={props.suggestAlternative}
                        links={props.links}
                        isTheftFraudLossStatus={props.isTheftFraudLossStatus}
                        suggestAlternativeStatus={props.suggestAlternativeStatus}
                        comments={props.comments}
                        setOrderRequestFunction={props.setOrderRequestFunction}
                      />
)
                  }
                <SummaryItem
                  services={[
                        {
                            name: 'Service',
                            price: 29.9,
                        },
                        {
                            name: 'Service',
                            price: 29.9,
                        },
                    ]}
                />
                {
                      props.serviceDetailsTitle && props.serviceDetailsDetails ?
                          // eslint-disable-next-line max-len
                          (
                            <OrderRequestForm
                              confirmFormFilledFunction={this.confirmFormFilled}
                              isTheftFraudLoss={props.isTheftFraudLoss}
                              suggestAlternative={props.suggestAlternative}
                              links={props.links}
                              isTheftFraudLossStatus={props.isTheftFraudLossStatus}
                              suggestAlternativeStatus={props.suggestAlternativeStatus}
                              comments={props.comments}
                              setOrderRequestFunction={props.setOrderRequestFunction}
                            />
                      ) : undefined
                  }
                <div className="formStateDiv" />
              </div>
                ) : undefined}
          </div>
        );
    }
}

export default OrderRequestState;
