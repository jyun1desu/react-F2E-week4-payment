import styled from 'styled-components';
import { color } from './style/color';
import backgroundPattern from './assets/footer-background.svg'
//components
import NowProgress from './components/currentProgress'
import OrderDetail from './components/orderDetail'

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
    position: absolute;
    bottom:0;
  }

  .container{
    display: flex;
    flex-basis: 70%;
  }
`

const App = () => {
  return (
    <Home>
      <div className="container">
        <div className="sub_content">
          <OrderDetail className="order_detail"/>
          <button className="back_to_prev">回上一頁</button>
        </div>
        <main className="payment">
          <NowProgress />
        </main>
      </div>
    </Home>
  );
}

export default App;
