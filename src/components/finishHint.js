import styled from 'styled-components';

const Hint = styled.div`
  margin-right:30px;
  height:80px;
  position: absolute;
  top:10%;
  right:100%;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:space-between;

  .deco{
    .slash{
      display:block;
      width:16px;
      border-top:2px solid #000;
      border-radius:5px;

      &__top{
        transform:rotate(45deg);
      }
      &__bottom{
        transform:rotate(-45deg);
      }
    }
  }
  .hint{
    font-size: 20px;
    letter-spacing: 2.5px;
  }
`

const hint = (props) => {
  return (
    <Hint style={{'display':`${props.showOrderList?'none':'flex'}`}}>
      <div className="deco">
        <span className="slash slash__top"></span>
      </div>
      <div className="hint">Finish</div>
      <div className="deco">
      <span className="slash slash__bottom"></span>
      </div>
    </Hint>
  );
}

export default hint;