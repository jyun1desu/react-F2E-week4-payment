import styled from 'styled-components';
import { color } from '../style/color';

const CurrentProgress = styled.div`
  width:75%;
  margin-left:auto;
  display:flex;
  justify-content:center;
  user-select: none;
  .bar{
    display: inline-block;
    margin: 40px 0;
    position:relative;

  &::after{
    content:'';
    display:block;
    width:100%;
    height:2px;
    background-image:linear-gradient(to right, ${color.progress_light_color} 20%, #D8D8D8 35%);
    
    position:absolute;
    top:50%;
    z-index:-1;
  }
    .each_step{
      background-color:#AFAFAF;
      display: inline-block;
      width:40px;
      height:40px;
      border-radius:50%;
      text-align:center;
      &.now_step{
        background-color:${color.progress_light_color};
      }
      &+.each_step{
        margin-left: 90px;

      }
      .number{
        color:#fff;
        line-height:40px;
        font-size:20px;
        vertical-align:middle;
      }
    }
  }
`

const progress = ['choosePayMethod', 'fillForm', 'sucessHint']

const Bar = (props) => {
  return (
    <CurrentProgress>
      <div className="bar">
        {progress.map((step, index) => {
          return <div key={step} className={`each_step ${step === props.nowStep ? 'now_step' : ''}`}>
            <span className="number">{index + 1}</span>
          </div>
        })}
      </div>
    </CurrentProgress>
  );
}

export default Bar;