import styled from 'styled-components';
import { color } from '../style/color';
import { Link } from 'react-router-dom';
//image
import successImage from '../assets/finish.svg'
import { useEffect } from 'react';

const Success = styled.div`
display: flex;
flex-direction: column;
align-items:center;
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
  }

  .success_image{
    margin-top:60px;
    position:relative;
    .background{
      display:block;  
      width:150px;
      height:150px;
      border-radius:50%;
      background-color: ${color.highlight_color};
    }
    .celebration{
      position:absolute;
      top:0;
    }
  }

  .context{
    margin-top:60px;
    .text{
      font-size:14px;
      letter-spacing:1.5px;
    }
  }

  .button{
    font-size:14px;
    padding:10px 15px;
    letter-spacing: 1.5px;
    border-radius: 5px;
    margin-top:30px;
    text-decoration: none;

    &.to_previous{
      color:#fff;
      background-color:${color.selected_color};
    }


`


const SuccessPage = (props) => {
  useEffect(() => {
    props.updateProgress('successHint');
  });
  return (
    <Success>
      <div className="title_area">
        <p className="title">您的訂單已完成付款！</p>
      </div>
      <div className="success_image">
        <div className="background"></div>
        <img className="celebration" src={successImage} alt="" />
      </div>
      <div className="context">
        <p className="text">稍後將寄送訂單詳細資訊至您的E-mail</p>
      </div>
      <Link
        className="button to_previous"
        to="/react-F2E-week4-payment">返回首頁
      </Link>
    </Success>
  )
}

export default SuccessPage;