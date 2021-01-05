import styled from 'styled-components';
import { color } from '../style/color';
import { device } from '../style/breakpoints';

const CurrentProgress = styled.div`
  width:100%;
  margin-left:auto;
  display:flex;
  justify-content:center;
  user-select: none;

  @media ${device.tablet} {
    width:75%;
    .bar{
      margin: 40px 0;
    }
  }
  .bar{
    display: inline-block;
    margin: 20px 0;
    position:relative;

  &::after{
    content:'';
    display:block;
    width:100%;
    height:2px;
    
    position:absolute;
    top:50%;
    z-index:-1;
  }

  &.first_step{
    &::after{
      background-image:linear-gradient(to right, ${color.progress_light_color} 20%, #D8D8D8 35%);
    }
    .each_step{
      &:first-child{
        background-color:${color.progress_light_color};
      }
    }
  }
  &.second_step{
    &::after{
      background-image:linear-gradient(to right, ${color.progress_light_color} 60%, #D8D8D8 75%);
    }
    .each_step{
      &:first-child,&:nth-child(2){
        background-color:${color.progress_light_color};
      }
    }
  }
  &.last_step{
    &::after{
      background-color:${color.progress_light_color};
    }
    .each_step{
        background-color:${color.progress_light_color};
    }
  }
    .each_step{
      background-color:#AFAFAF;
      display: inline-block;
      width:30px;
      height:30px;
      border-radius:50%;
      text-align:center;

      @media ${device.tablet} {
        width:40px;
        height:40px;
      }
      &+.each_step{
        margin-left: 90px;
      }
      .number{
        color:#fff;
        line-height:30px;
        font-size:17px;
        vertical-align:middle;

        @media ${device.tablet} {
          line-height:40px;
          font-size:20px;
        }

      }
    }
  }
`

const progress = ['choosePayMethod', 'fillForm', 'successHint']

const Bar = (props) => {
  const nowProgress = function(){
    switch(props.nowStep){
      case 'choosePayMethod':
        return 'first_step';
      case 'fillForm':
        return 'second_step';
      case 'successHint':
        return 'last_step';
      default:
        return 'first_step';
    }
  };
  
  return (
    <CurrentProgress>
      <div className={`bar ${nowProgress()}`}>
        {progress.map((step, index) => {
          return <div key={step} className="each_step">
            <span className="number">{index + 1}</span>
          </div>
        })}
      </div>
    </CurrentProgress>
  );
}

export default Bar;