import { useState,useEffect } from 'react';
//style
import styled from 'styled-components';
import { color } from './style/color';
import backgroundPattern from './assets/footer-background.svg';
//router
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import NowProgress from './components/currentProgress';
import OrderDetail from './components/orderDetail';
import BackToStoreButton from './components/button';
import FinishHint from './components/finishHint';
//views
import PaymentMethods from './views/paymentMethods';
import CreditCardForm from './views/creditCardForm';
import WebATMForm from './views/webATMForm';
import CVStore from './views/chooseStore';
import SuccessPage from './views/successPage';
import CVSuccessPage from './views/cvSuccessPage';


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
    flex-basis: 75%;

    .content{
      display:flex;
      height:100%;

      .sub_content{
        flex-basis: 25%;
        transition:all 0.5s;
        z-index:5;

        &.hide{
          transform:translateX(85%);
          &>div{
            .title,.context{
              opacity:0;
            }
          }
          }
        }
      }

      .main_info_box{
        flex-basis:75%;
        box-sizing: border-box;
        padding:50px;
        background: #FFFFFF;
        box-shadow: 0 2px 13px 0 rgba(0,0,0,0.08);
        border-radius: 0 10px 0 0;
        z-index:10;
      }
    }
  }
`

const App = () =>{
  const [nowProgress,setNowProgress] = useState('choosePayMethod')
  const [showOrderList,toggleOrderList] = useState(true)

  const updateProgress = (status)=>{
    setNowProgress(status)
  }

  const toggleList = () =>  {
    if(nowProgress==='successHint'){
      toggleOrderList(!showOrderList);
    }
  }

  useEffect(toggleList,[nowProgress]);

  return (
    <Router>
      <Home>
        <div className="container">
          <NowProgress nowStep={nowProgress} />
          <main className="content">
            <div 
            onClick={toggleList}
            className={`sub_content ${showOrderList?'':'hide'}`}>
              <FinishHint showOrderList={showOrderList}/>
              <OrderDetail/>
              <BackToStoreButton showOrderList={showOrderList} text="返回商店" />
            </div>
            <div className="main_info_box">
              <Switch>
                <Route exact path="/">
                  <PaymentMethods updateProgress={updateProgress}/>
                </Route>
                <Route path="/credit_card_form">
                  <CreditCardForm updateProgress={updateProgress}/>
                </Route>
                <Route path="/cvstore_form">
                  <CVStore updateProgress={updateProgress}/>
                </Route>
                <Route path="/web_atm_form">
                  <WebATMForm updateProgress={updateProgress}/>
                </Route>
                <Route path="/success">
                  <SuccessPage updateProgress={updateProgress}/>
                </Route>
                <Route path="/cv_success">
                  <CVSuccessPage updateProgress={updateProgress}/>
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
