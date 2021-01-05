import styled from 'styled-components';
import { color } from '../style/color';
import { device } from '../style/breakpoints';
import { useState } from 'react';

const Block = styled.div`
    background-color:#F3F3F3;
    letter-spacing: 2px;
    transition: 0.5s all;
    border-radius: 0 0 10px 0;
    position:relative;
    filter: drop-shadow(0px 1px 2px #D1D1D1);
    @media ${device.tablet} {
        position:static;
        border-radius: 10px 0 0 10px;
        padding:25px 40px 25px 25px;
        box-shadow: none;
        display: block;
    }

    .title{
        display:flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 400;
        padding: 12px;
        position:absolute;
        background-color:#F3F3F3;
        border-radius: 0 10px 10px 0;
        left:99%;
        @media ${device.tablet} {
            font-size: 18px;
            flex-direction: row;
            position:static;
            padding: 0;
            margin-bottom:20px;
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
        @media ${device.laptopL} {
            white-space: nowrap;
        }
    }
`

const OrderDetail = () => {
    const [showListMobile,toggleShowListMobile] = useState(false);
    const toggleList = () => {
        toggleShowListMobile(!showListMobile)
        console.log(showListMobile)
    }
    return (
        <Block style={{'right':`${showListMobile?'0':'100%'}`}}>
            <p 
            onClick={toggleList}
            className="title">
                <span>訂</span>
                <span>單</span>
                <span>資</span>
                <span>訊</span>
                </p>
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