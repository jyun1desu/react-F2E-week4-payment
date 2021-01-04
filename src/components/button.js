import styled from 'styled-components';
import { color } from '../style/color';

const button = (props) => {
  const BackToPrevious = styled.button`
  display:${props.nowStep==='successHint'?'none':'inline-block'};
  color: #fff;
  font-size:14px;
  padding:10px 15px;
  letter-spacing: 1.5px;
  background-color:${color.main_font_color};
  border-radius: 5px;
  margin-top:20px;
`

  return (
    <BackToPrevious>
      {props.text}
    </BackToPrevious>
  );
}

export default button;