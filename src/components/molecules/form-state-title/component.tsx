import React, { ChangeEvent, FC } from 'react';
import styled from './style.module.scss';
import AdditionalDataIcon from './additionalDataIcon.svg';
import EditIcon from './editIcon.svg';
import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

// @ts-ignore
// eslint-disable-next-line max-len,react/no-unused-prop-types,@typescript-eslint/ban-types
const FormStateTitle = (props: {isHidden: boolean, filled: boolean, formNumber: number, mainTitleText: string, additionalDataText: string, setFormFunction: Function}) => {
    const mainProps = props;
    // @ts-ignore
    return (
      <div className={mainProps.isHidden && !mainProps.filled ? styled.titleHidden : styled.title}>
        <span className={styled.formCounter}>{
        mainProps.formNumber
    }
        </span>
        <div className={styled.titleDiv}>
          <div className={styled.titleTexts}>
            <span className={styled.mainTitleText}>{mainProps.mainTitleText}</span>
            {mainProps.additionalDataText && !mainProps.isHidden ? (
              <div className={styled.additionalData}>
                <div className={styled.additionalDataIcon}>
                  <img src={AdditionalDataIcon} alt="Protected" />
                </div>
                <span className={styled.additionalDataText}>{mainProps.additionalDataText}</span>
              </div>
            ) : undefined}
          </div>
          {mainProps.isHidden && mainProps.filled ? (
            <button
              id={String(mainProps.formNumber)}
              type="button"
              className={styled.openFormButton}
              onClick={(target) => {
              mainProps.setFormFunction(target);
          }}
            >
              <img id={String(mainProps.formNumber)} src={EditIcon} alt="Edit" />
              <span id={String(mainProps.formNumber)}>Modify</span>
            </button>
            ) : undefined
          }
        </div>
        {mainProps.isHidden ? <hr className={styled.hiddenLine} /> : undefined}
      </div>
);
};

export default FormStateTitle;
