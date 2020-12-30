import styled from 'styled-components';
import { color } from '../style/color';

const Block = styled.div`
    background-color:#F3F3F3;
    padding:25px;
    letter-spacing: 2px;
    border-radius: 10px 0 0 10px;
    white-space:nowrap;

    .title{
        font-size: 18px;
        font-weight: 400;
    }
    .each_detail{
        margin-top:20px;
        .sub_title{
            color: ${color.input_hint_color};
        }
    }
`

const OrderDetail = () => {
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