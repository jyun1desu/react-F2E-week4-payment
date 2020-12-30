import styled from 'styled-components';
import { color } from '../style/color';

const BackToPrevious = styled.button`
  color: #fff;
  font-size:14px;
  padding:10px 15px;
  letter-spacing: 1.5px;
  background-color:${color.main_font_color};
  border: none;
  border-radius: 5px;
  margin-top:20px;

  &.to_next_button{
    margin-left:auto;
    background-color:${color.selected_color};
  }

  &:focus{
    outline:none
  }
`

const button = (props) => {
  return (
    <BackToPrevious className={props.usage==='nextPage'?'to_next_button':''}>
      {props.text}
    </BackToPrevious>
  );
}

export default button;