import styled from 'styled-components';
import { color } from './style/color';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  h1{
    color: ${color.main_background_color};
  }
`

const App = () => {
  return (
    <Wrapper>
      <h1>hello world</h1>
    </Wrapper>
  );
}

export default App;
