import React from 'react';
require('./MeHeader.css');

class MeHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="header-section1">
                    <div className="pro-img"><img/></div>
                    <div className="pro-info"><span className="login">点击登录</span><br/><span className="ms">个人二维码</span></div>
                    <div className="pro-arrow"> > </div>
                </div>

                <div className="header-section2">
                    <div className="money-left"><span className="much">100.00</span><br/><span className="left">余额（元）</span></div>
                    <div className="money-into"><span className="much">100.00</span><br/><span className="into">充值（元）</span></div>
                    <div className="money-flow"><span className="much">100.00</span><br/><span className="flow">流水（元）</span></div>
                </div>
            </div>
        )
    }
}

module.exports = MeHeader;