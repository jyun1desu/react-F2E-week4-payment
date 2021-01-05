import styled from 'styled-components';
import { color } from '../style/color';

const BackToPrevious = styled.button`
color: #fff;
font-size:14px;
padding:10px 15px;
letter-spacing: 1.5px;
background-color:${color.main_font_color};
border-radius: 5px;
margin-top:20px;
`

const button = (props) => {

  return (
    <BackToPrevious style={{'opacity':`${props.showOrderList?'1':'0'}`}}>
      {props.text}
    </BackToPrevious>
  );
}

export default button;