import styled from 'styled-components';
import creditCardIcon from '../assets/credit-card.svg';
import unionPayIcon from '../assets/unionpay.svg';
import cvPayIcon from '../assets/shop.svg';
import webATMPayIcon from '../assets/web-atm.svg';
import atmPayIcon from '../assets/atm.svg';
import { color } from '../style/color';

//components
import ToNextButton from './button';

const PaymentsPage = styled.div`
    flex: 1 1 100%;
    background: #FFFFFF;
    box-shadow: 0 2px 13px 0 rgba(0,0,0,0.08);
    border-radius: 0 10px 0 0;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    box-sizing: border-box;
    padding:50px;

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
        
      .each_method{
        &+.each_method{
          margin-left: 20px;
        }
        &:hover{
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
        text-align: center;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        justify-content: center;
          .icon{
              max-height:55px;
          }
          .title{
              font-size:14px;
              letter-spacing: 1.5px;
              margin-top:10px;
          }
        }
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
                    return <a className="each_method" key={`payment${index}`}>
                        <img className="icon" src={m.icon} alt="" />
                        <p className="title">{m.method}</p>
                    </a>
                })}
            </div>
            <ToNextButton text="下一步" usage="nextPage"/>
        </PaymentsPage>
    );
}

export default page;