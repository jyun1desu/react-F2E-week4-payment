import styled from 'styled-components';
import { color } from './style/color';
import backgroundPattern from './assets/footer-background.svg';
//components
import NowProgress from './components/currentProgress';
import OrderDetail from './components/orderDetail';
import BackToStoreButton from './components/button';
import PaymentMethods from './components/paymentMethods';

const Home = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  &::after{
    content: '';
    display:block;
    width:100%;
    height: 23%;
    background-color: ${color.main_background_color};
    background-image: url(${backgroundPattern});
    background-size: 70px;
    position: fixed;
    bottom:0;
  }

  .container{
    flex-basis: 70%;
    z-index:1;

    .content{
      display:flex;
      height:100%;

      .sub_content{
        flex-basis: 25%;
      }
    }
  }
`

const App = () => {
  return (
    <Home>
      <div className="container">
        <NowProgress nowStep='choosePayMethod' />
        <main className="content">
          <div className="sub_content">
            <OrderDetail/>
            <BackToStoreButton text="返回商店"/>
          </div>
          <PaymentMethods/>
        </main>
      </div>
    </Home>
  );
}

export default App;
