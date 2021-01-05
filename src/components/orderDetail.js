import styled from 'styled-components';
import { color } from '../style/color';
import { device } from '../style/breakpoints';

const Block = styled.div`
    background-color:#F3F3F3;
    letter-spacing: 2px;
    white-space:nowrap;
    border-radius: 0 0 10px 0;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.08);
    display:flex;
    flex-direction: row-reverse;
    align-items:flex-start;
    @media ${device.tablet} {
        border-radius: 10px 0 0 10px;
        padding:25px 40px 25px 25px;
        box-shadow: none;
        display: block;
    }

    .title{
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 2px;
        padding: 15px;
        writing-mode: vertical-lr;
        @media ${device.tablet} {
            writing-mode: horizontal-tb;
            padding: 0;
        }
    }
    .context{
        padding: 15px;
        @media ${device.tablet} {
            padding: 0;
        }
    }
    .each_detail{
        &+.each_detail{
            margin-top:20px;
        }
        .sub_title{
            color: ${color.input_hint_color};
        }
    }
`

const OrderDetail = ({order_blcok}) => {
    return (
        <Block>
            <p className="title">訂單資訊</p>
            <div className="context">
                <div className="each_detail">
                    <p className="sub_title">商品名稱：</p>
                    <p className="content">iPhone XR手機殼×1</p>
                </div>
                <div className="each_detail">
                    <p className="sub_title">訂單編號：</p>
                    <p className="content">17485739</p>
                </div>
                <div className="each_detail">
                    <p className="sub_title">訂單金額：</p>
                    <p className="content">NT$ 600</p>
                </div>
            </div>
        </Block>
    );
}

export default OrderDetail;