import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';
//img
import visaIcon from '../assets/visa.svg';
import jcbIcon from '../assets/jcb.svg';
import masterCardIcon from '../assets/mastercard.svg';
import securityCodeIcon from '../assets/back-three.svg';
//router
import { Link } from 'react-router-dom';

const FillInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;

    .title_area{
      align-self: center;
      text-align: center;
      .title{
      margin: 0 auto;
      font-size: 20px;
      letter-spacing:2px;
      font-weight:500;
      padding: 0 10px 5px;
      background: linear-gradient(to top, ${color.highlight_color} 50%, transparent 50%);
      }

      .method{
        font-size: 12px;
        letter-spacing: 1.3px;
        font-weight: 500;
        color: #000000;
      }
    }

    form{
      font-size:14px;
      letter-spacing:1.5px;
      box-sizing:border-box;
      margin-top: 20px;
      padding: 5px;
      .installment_options{
        display: flex;
        .option{
          cursor:pointer;
          &+.option{
            margin-left:30px;
          }
          &__radio{
            display: inline-block;
            width:16px;
            height:16px;
            border:1px solid ${color.input_hint_color};
            border-radius: 50%;
            vertical-align:middle;
            margin-right:10px;
            position:relative;

            &.chosen{
              &::after{
                content:'';
                display:block;
                width:11px;
                height:11px;
                border-radius:50%;
                background-color: ${color.selected_color};
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
              }
            }

          }
          &__text{
            vertical-align:middle;
          }
        }
      }
      

      .info{
        margin-top:20px;
        .title{
          margin-bottom: 10px;
        }
        .column{
          margin-bottom: 15px;
          .fill_in{
            display:flex;
            align-items:center;
            .input_blank{
              border:1px solid ${color.input_hint_color};
              border-radius: 5px;
              padding: 7px 12px;
              margin-right: 10px;
              color:#000;
              font-size:15px;
              letter-spacing:1.5px;
              font-weight:300;
              text-align:center;
              &:focus{
                outline:none;
              }
              &.warning{
                border:1px solid ${color.warning_color};
              }
            }
          }

          &.card_number{
            .fill_in{
              .fill_blanks{
                display:flex;
                align-items:center;
                .input_blank{
                  width:50px;
                }
                .dash{
                  display:inline-block;
                  width:12px;
                  border-top:1px solid #000;
                  margin-right: 10px;
                  vertical-align:middle;
                }
              }
              .card_type{
                display:flex;
                margin-left:15px;
                img{
                  width:45px;
                  &.isCard{
                    filter: invert(55%) sepia(98%) saturate(293%) hue-rotate(113deg) brightness(93%) contrast(86%);
                  }
                  &+img{
                    margin-left:5px;
                  }
                }
              }
            }
          }

          &.expiry_date,&.security_code{
            .fill_in{
              .input_blank{
                width:80px;
                &::placeholder{
                  font-size:12px;
                }
              }

              span{
                margin: 0 15px;
              }
            }
            .valid_check{
              width:45px;
              img{
                width:100%;
                vertical-align:middle;
              }
            }
          }

          &.buyer_email{
            .fill_blanks{
              flex:100%;
              .input_blank{
                text-align:left;
                width:40%;
              }
            }
          }
        }
      }
    }

    .reconfirm_check{
      display: flex;
      align-items: flex-start;
      .checkbox{
        &.chosen{
          border:1px solid ${color.selected_color};
          background-color:${color.selected_color};
        }
        cursor:pointer;
        margin: 5px 12px 0 0;
        flex-shrink:0;
        box-sizing:border-box;
        width: 15px;
        height: 15px;
        border-radius: 5px;
        border: 1px solid ${color.input_hint_color};
        position:relative;

        .checkmark {
          display:inline-block;
          position:absolute;
          top:50%;
          left:50%;
          width: 22px;
          height:22px;
          transform-origin:top left;
          transform: rotate(45deg) translate(-50%,-50%);

          .checkmark_stem {
            position: absolute;
            width:2px;
            height:8px;
            background-color:#fff;
            left:11px;
            top:6px;
        }
        
        .checkmark_kick {
            position: absolute;
            width:3px;
            height:2px;
            background-color:#fff;
            left:8px;
            top:12px;
        }
      }
      }

      .content{
        line-height: 25px;
        letter-spacing: 2.5px;
        display:flex;
        flex-direction:column;

        .provision_detail{
          margin-top:10px;
          color: ${color.input_hint_color};
        }
      }
    }

    .button_area{
      display: flex;
      justify-content:space-between;
      .button{
        font-size:14px;
        padding:10px 15px;
        letter-spacing: 1.5px;
        border-radius: 5px;
        margin-top:20px;
        text-decoration: none;

        &.to_previous{
          color:${color.sub_font_color};
          background-color:${color.to_previous_button_color};
        }
        &.to_next{
          color: #fff;
          background-color:${color.selected_color};
        }
      }
    }
`

const CreditCardForm = () => {
  const [payment, setPayment] = useState('pay in full');
  const [reconfirm, checkReconfirm] = useState(false);
  const [creditCardNumberFormat, setCreditCardNumberValid] = useState([null, null, null, null]);
  const [creditCardNumber, setCreditCardNumber] = useState(['', '']);
  const [cardOrganization, setCardOrganization] = useState('none');
  const [expiryDateFormat, setExpiryDateValid] = useState([null, null]);
  const [securiyCodeFormat, setSecuriyCodeValid] = useState(null);
  const [emailFormat, setEmailValid] = useState(null);

  useEffect(() => {
    identifyCardOrganization();
  });

  const isOnlyNumber = function (strInput) {
    const reg = /^\d+$/
    return reg.test(strInput)
  };
  const checkValidCardNumber = function (index, strInput) {
    const isNumber = isOnlyNumber(strInput);
    const rightLength = strInput.length === 4;
    const validArray = [...creditCardNumberFormat]
    validArray[index] = strInput.length ? (isNumber && rightLength) : null;
    setCreditCardNumberValid(validArray)
    if ((isNumber && rightLength) && (index < 2)) {
      const nowInput = [...creditCardNumber];
      nowInput[index] = strInput;
      setCreditCardNumber(nowInput)
      identifyCardOrganization();
    }
  };
  const checkValidExpiryDate = function (index, strInput) {
    const isNumber = isOnlyNumber(strInput);
    const rightLength = strInput.length === 2;
    let monthIsRight = true;
    if (index === 0) {
      const isMonth = Number(strInput) < 13 ? true : false;
      monthIsRight = isMonth;
    }
    const validArray = [...expiryDateFormat];
    validArray[index] = strInput.length ? (isNumber && rightLength && monthIsRight) : null;
    setExpiryDateValid(validArray)
  };
  const checkSecurityCode = function (strInput) {
    const isNumber = isOnlyNumber(strInput);
    const rightLength = strInput.length === 3;
    const isValid = strInput.length ? (isNumber && rightLength) : null;
    setSecuriyCodeValid(isValid)
  };
  const checkEmail = function (strInput) {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const isVaild = reg.test(strInput);
    setEmailValid(isVaild)
  };
  const identifyCardOrganization = function () {
    if (creditCardNumberFormat[0] && creditCardNumberFormat[1]) {
      const number = Number(creditCardNumber[0]) + Number(creditCardNumber[1])
      switch (number % 3) {
        case 0:
          setCardOrganization('visa');
          break;
        case 1:
          setCardOrganization('jcb');
          break;
        case 2:
          setCardOrganization('master card');
          break;
        default:
          setCardOrganization('');
      }
    } else {
      setCardOrganization('');
    }
  };


  return (
    <FillInForm>
      <div className="title_area">
        <p className="title">STEP2：填寫付款資訊</p>
        <span className="method">信用卡/金融卡</span>
      </div>

      <form>
        <div className="installment_options">
          <div
            onClick={() => setPayment('pay in full')}
            className="option pay_in_full">
            <span
              className={`option__radio ${payment === 'pay in full' ? 'chosen' : ''}`}></span>
            <span className="option__text">一次付清</span>
          </div>
          <div
            onClick={() => setPayment('installment pay')}
            className="option installment_pay">
            <span
              className={`option__radio ${payment === 'installment pay' ? 'chosen' : ''}`}></span>
            <span className="option__text">分期付款</span>
          </div>
        </div>
        <div className="info card_info">
          <div className="column card_number">
            <p className="title">信用卡號：</p>
            <div className="fill_in">
              <div className="fill_blanks">
                <input
                  onChange={(e) => checkValidCardNumber(0, e.target.value)}
                  className={`input_blank ${creditCardNumberFormat[0] === false ? 'warning' : ''}`}
                  type="text" />
                <span className="dash"></span>
                <input
                  onChange={(e) => checkValidCardNumber(1, e.target.value)}
                  className={`input_blank ${creditCardNumberFormat[1] === false ? 'warning' : ''}`}
                  type="text" />
                <span className="dash"></span>
                <input
                  onChange={(e) => checkValidCardNumber(2, e.target.value)}
                  className={`input_blank ${creditCardNumberFormat[2] === false ? 'warning' : ''}`}
                  type="text" />
                <span className="dash"></span>
                <input
                  onChange={(e) => checkValidCardNumber(3, e.target.value)}
                  className={`input_blank ${creditCardNumberFormat[3] === false ? 'warning' : ''}`}
                  type="text" />
              </div>
              <div className="card_type">
                <img
                  className={`visa ${cardOrganization === 'visa' ? 'isCard' : ''}`}
                  src={visaIcon} alt="visa card" />
                <img
                  className={`jcb ${cardOrganization === 'jcb' ? 'isCard' : ''}`}
                  src={jcbIcon} alt="jcb card" />
                <img
                  className={`master_card ${cardOrganization === 'master card' ? 'isCard' : ''}`}
                  src={masterCardIcon} alt="master card" />
              </div>
            </div>
          </div>
          <div className="column expiry_date">
            <p className="title">有效年月：</p>
            <div className="fill_in">
              <div className="fill_blanks">
                <input
                  onChange={(e) => checkValidExpiryDate(0, e.target.value)}
                  className={`input_blank ${expiryDateFormat[0] === false ? 'warning' : ''}`}
                  placeholder="月，如：04"
                  type="text" />
                <span className="slash">/</span>
                <input
                  onChange={(e) => checkValidExpiryDate(1, e.target.value)}
                  className={`input_blank ${expiryDateFormat[1] === false ? 'warning' : ''}`}
                  placeholder="年，如：21"
                  type="text" />
              </div>
              <span>年</span>
            </div>
          </div>
          <div className="column security_code">
            <p className="title">背面末三碼：</p>
            <div className="fill_in">
              <div className="fill_blanks">
                <input
                  onChange={(e) => checkSecurityCode(e.target.value)}
                  className={`input_blank ${securiyCodeFormat === false ? 'warning' : ''}`}
                  type="text" />
              </div>
              <div className="valid_check">
                <img src={securityCodeIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="info buyer_info">
          <div className="column buyer_email">
            <p className="title">填寫付款人信箱：</p>
            <div className="fill_in">
              <div className="fill_blanks">
                <input
                  onChange={(e) => checkEmail(e.target.value)}
                  className={`input_blank ${emailFormat === false ? 'warning' : ''}`}
                  type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="reconfirm_check">
          <span className={`checkbox ${reconfirm ? 'chosen' : ''}`}>
            <span
              onClick={() => checkReconfirm(!reconfirm)}
              className="checkmark">
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
          </span>
          <p className="content">
            <span>請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的E-mail信箱</span>
            <a href="http://google.com" className="provision_detail">第三方支付金流平台服務條款</a>
          </p>
        </div>
        <div className="button_area">
          <Link
            className="button to_previous"
            to="/">回上一頁</Link>
          <Link
            className="button to_next"
            to="/">確認付款</Link>
        </div>
      </form>

    </FillInForm>
  );
}

export default CreditCardForm;