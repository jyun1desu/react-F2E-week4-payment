// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  h1{
    color: pink;
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
