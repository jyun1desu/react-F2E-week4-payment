import styled from 'styled-components';
import creditCardIcon from '../assets/credit-card.svg';
import unionPayIcon from '../assets/unionpay.svg';
import cvPayIcon from '../assets/shop.svg';
import webATMPayIcon from '../assets/web-atm.svg';
import atmPayIcon from '../assets/atm.svg';
import { color } from '../style/color';
//router
import {Link} from 'react-router-dom';

const PaymentsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;

    &>.title{
      margin: 0 auto;
      font-size: 20px;
      letter-spacing:2px;
      font-weight:500;
      padding: 0 10px 5px;
      background: linear-gradient(to top, ${color.highlight_color} 50%, transparent 50%);
    }

    .methods_list{
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top:90px;
      width:100%;
        
      .each_method{
        &+.each_method{
          margin-left: 20px;
        }
        &:focus,&:hover{
          background-color:${color.selected_color};
          .icon{
            filter: brightness(0) invert(100%);
          }
          .title{
            color:#fff;
          }
        }
        margin-bottom: 20px;
        flex: 0 1 30%;
        padding: 30px;
        background:#f7f7f7;
        border-radius:5px;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        justify-content: center;
          .icon{
              max-height:55px;
          }
          .title{
              width:100%;
              font-size:14px;
              text-align: center;
              letter-spacing: 1.5px;
              margin-top:10px;
          }
        }
    }
    .to_next_page{
      color: #fff;
      font-size:14px;
      padding:10px 15px;
      letter-spacing: 1.5px;
      border-radius: 5px;
      margin-top:20px;
    
      margin-left:auto;
      background-color:${color.selected_color};

      text-decoration: none;
    }
`

const payMethods = [
    { method: '信用卡/金融卡', icon: creditCardIcon },
    { method: '銀聯卡', icon: unionPayIcon },
    { method: '超商付款', icon: cvPayIcon },
    { method: 'Web ATM', icon: webATMPayIcon },
    { method: 'ATM轉帳', icon: atmPayIcon }
]

const page = () => {
    return (
        <PaymentsPage>
            <p className="title">STEP1：選擇付款方式</p>
            <div className="methods_list">
                {payMethods.map((m, index) => {
                    return <button className="each_method" key={`payment${index}`}>
                        <img className="icon" src={m.icon} alt="" />
                        <span className="title">{m.method}</span>
                    </button>
                })}
            </div>
            <Link className="to_next_page" to="/pay_and_ship_form">下一頁</Link>
        </PaymentsPage>
    );
}

export default page;