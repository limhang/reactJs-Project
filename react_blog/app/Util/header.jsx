require('./common.css');
import React from 'react';
let Header = React.createClass({
    getInitialState: function() {
        return {
            title: '首页',
        };
    },
    componentDidMount: function() {
        // let c_width = document.body.clientWidth;
        // document.querySelector("#header").style.width=c_width+'px';
    },
    render: function() {
        return (
            <div className="header">
                <div className="pure-g">
                    <div className="pure-u-2-24 header-left">
                        <img className="pure-img" src="image/top_4@2x.png" alt=""/>
                    </div>
                    <div className="pure-u-20-24 header-title">{this.state.title}</div>
                    <div className="pure-u-2-24 header-right">
                        <img className="pure-img" src="image/top_1@2x.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
