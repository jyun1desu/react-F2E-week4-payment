import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';
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
      width:100%;
      font-size:14px;
      letter-spacing:1.5px;
      box-sizing:border-box;
      margin-top: 20px;
      padding: 5px;

      .info{
        margin-top:20px;
        .title{
          margin-bottom: 10px;
        }
        .column{
          margin-bottom: 15px;
        }

        .input_blank{
          border:1px solid ${color.input_hint_color};
          border-radius: 5px;
          padding: 7px 12px;
          font-size:15px;
          letter-spacing:1.5px;
          font-weight:300;
          text-align:left;
          &:focus{
            outline:none;
          }
          &.warning{
            border:1px solid ${color.warning_color};
          }

          &.email{
            width:70%;
          }
        }
      }

      .reconfirm_check{
        display: flex;
        align-items: flex-start;
        margin-top: 30px;
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
  
          &.disabled{
            cursor: default;
            background-color: #AFAFAF;
            color:#fff;
          }
        }
      }
    }

    
`
const Dropdown = styled.div`
    width:50%;
    margin-bottom:30px;
    cursor:pointer;
    position:relative;
    .input_blank.dropdown_blank{
      color: ${color.input_hint_color};
      position: relative;
      &.show_list{
        border-radius:5px 5px 0 0;
      }
      &::after{
        content:'▼';
        font-size:12px;
        position:absolute;
        right:5px;
        top:50%;
        transform:translateY(-50%);
      }
      &.have_store{
        color: #000;
        &::after{
          color: ${color.input_hint_color};
        }
      }
    }
    .dropdown_options{
      position:absolute;
      width:100%;
      background-color: #F3F3F3;
      border-radius:0 0 5px 5px;
      list-style-type:none;
      padding: 0 12px 7px;
      box-sizing:border-box;
      z-index:10;

      .option{
        padding:10px 0;
        border-bottom:1px solid ${color.input_hint_color};
      }
    }
`

const bank = ['台新銀行', '國泰世華銀行', '玉山銀行']

const ATMForm = () => {
  const [showList, toggleShowList] = useState(false);
  const [selectedBank, setBank] = useState(null);
  const [emailFormat, setEmailValid] = useState(null);
  const [reconfirm, checkReconfirm] = useState(false);

  const checkInputAllFilled = useMemo(() => {
    return selectedBank && reconfirm && emailFormat
  }, [selectedBank, reconfirm, emailFormat]);

  function chooseAStore(store) {
    setBank(store);
    toggleShowList(false);
  };

  function checkEmail(strInput) {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const isVaild = reg.test(strInput);
    setEmailValid(isVaild)
  };


  return (
    <FillInForm>
      <div className="title_area">
        <p className="title">STEP2：填寫付款資訊</p>
        <span className="method">Web ATM</span>
      </div>

      <form>
        <div className="info">
          <div className="cloumn info__bank">
            <div className="title">付款銀行：</div>
            <Dropdown>
              <div
                onClick={() => toggleShowList(!showList)}
                className={`input_blank dropdown_blank ${showList ? 'show_list' : ''} ${selectedBank ? 'have_store' : ''}`}>{selectedBank ? selectedBank : '選擇銀行'}</div>
              <ul style={{ 'display': showList ? 'block' : 'none' }} className="dropdown_options">
                {bank.map((bank, index) => {
                  return (<li key={`bank${index}`} onClick={() => { chooseAStore(bank) }}
                    className="option">{bank}</li>)
                })}
              </ul>
            </Dropdown>
          </div>
          <div className="cloumn info__buyer_email">
            <div className="title">填寫付款人信箱：</div>
            <input
              onChange={(e) => checkEmail(e.target.value)}
              className={`input_blank email ${emailFormat === false ? 'warning' : ''}`} type="text" />
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
          {checkInputAllFilled ?
            <Link
              className="button to_next"
              to="/success">確認付款</Link>
            : <button
              className="button disabled"
              disabled>確認付款</button>}
        </div>
      </form>
    </FillInForm>
  );
}

export default ATMForm;