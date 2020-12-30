import styled from 'styled-components';
import { color } from './style/color';
import backgroundPattern from './assets/footer-background.svg'

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &::after{
    content: '';
    display:block;
    width:100%;
    height: 20%;
    background-color: ${color.main_background_color};
    background-image: url(${backgroundPattern});
    background-position: 20px;
    background-size: 4%;
    position: absolute;
    bottom:0;

  }
`

const App = () => {
  return (
    <Wrapper>
    </Wrapper>
  );
}

export default App;
