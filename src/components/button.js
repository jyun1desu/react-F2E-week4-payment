import styled from 'styled-components';
import { color } from '../style/color';
import { device } from '../style/breakpoints';

const BackToPrevious = styled.button`
color: #fff;
font-size:14px;
padding:10px 15px;
letter-spacing: 1.5px;
background-color:${color.main_font_color};
border-radius: 5px;
margin: 10px 0 0 10px;
position: absolute;
top:100%;
@media ${device.tablet} {
  position: static;
  display:inline-block;
  margin: 20px 0 0 0;
}
`

const button = (props) => {

  return (
    <BackToPrevious style={{'opacity':`${props.showOrderList?'1':'0'}`}}>
      {props.text}
    </BackToPrevious>
  );
}

export default button;