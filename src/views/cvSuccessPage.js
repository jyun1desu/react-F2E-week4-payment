import styled from 'styled-components';
import { color } from '../style/color';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Success = styled.div`
display: flex;
flex-direction: column;
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

  .remark{
    font-size: 14px;
    font-weight:300;
    letter-spacing:1.5px;
  }
  .button{
    font-size:14px;
    padding:10px 15px;
    letter-spacing: 1.5px;
    border-radius: 5px;
    margin:30px 0 0 auto;
    text-decoration: none;

    &.to_previous{
      color:#fff;
      background-color:${color.selected_color};
    }


`

const PayInfo = styled.div`
    margin-top:70px;
    .detail{
      margin-bottom:35px;
      .title{
        font-size:14px;
        letter-spacing:1.5px;
      }
      .content{
        font-size: 24px;
        letter-spacing: 2.5px;
        font-weight:300;
      }
    }
`

const paymentDetail = [
  { title: '付款超商', content: '便利商店' },
  { title: '付款代碼', content: 'HSD6DJYUNYI523' },
  { title: '付款期限', content: '2019-08-08 23:59:59' }
]

const CVSuccessPage = () => {
  const store = useLocation().state.store;
  return (
    <Success>
      <div className="title_area">
        <p className="title">您的訂單已成立！</p>
      </div>

      <PayInfo>
        {paymentDetail.map(detail => {
          return (<div key={detail.content} className="detail">
            <p className="title">{detail.title}</p>
            <p className="content">{detail.content==='便利商店'?`${store}${detail.content}`:detail.content}</p>
          </div>)
        })}
      </PayInfo>

      <p className="remark">*請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</p>

      <Link
        className="button to_previous"
        to="/">返回首頁
      </Link>
    </Success>
  )
}

export default CVSuccessPage;