import styled from 'styled-components';
import { color } from './style/color';
import backgroundPattern from './assets/footer-background.svg';
//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

      .main_info_box{
        flex-basis:75%;
        box-sizing: border-box;
        padding:50px;
        background: #FFFFFF;
        box-shadow: 0 2px 13px 0 rgba(0,0,0,0.08);
        border-radius: 0 10px 0 0;
      }
    }
  }
`

const App = () => {
  return (
    <Router>
      <Home>
        <div className="container">
          <NowProgress nowStep='choosePayMethod' />
          <main className="content">
            <div className="sub_content">
              <OrderDetail />
              <BackToStoreButton text="返回商店" />
            </div>
            <div className="main_info_box">
              <Switch>
                <Route path="/">
                  <PaymentMethods/>
                </Route>
              </Switch>
            </div>
          </main>
        </div>
      </Home>
    </Router>
  );
}

export default App;
