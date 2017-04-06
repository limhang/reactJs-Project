import React from 'react';
import {Link } from 'react-router';
let Footer = React.createClass({
    componentDidMount: function() {
        // let c_width = document.body.clientWidth;
        // document.querySelector("#content").style.width=c_width+'px';
    },
	render: function() {
		return (
			<div className="footer-container">
				<div className="pure-g">
					<div className="pure-u-1-5 footer-icon">
						<Link to='/Home'>
							<img className="pure-img" src="/image/home@2x.png" alt=""/>
							<span>首页</span>
						</Link>
					</div>

					<div className="pure-u-1-5 footer-icon">
						<Link to='/Game'>
							<img className="pure-img" src="/image/guard@2x.png" alt=""/>
							<span>乐园</span>
						</Link>

					</div>
					<div className="pure-u-1-5 footer-icon">
						<Link to="/Merchant">
							<img className="pure-img" src="/image/shop@2x.png" alt=""/>
							<span>商家</span>
						</Link>
					</div>
					<div className="pure-u-1-5 footer-icon">
						<Link to='/Shopping'>
							<img className="pure-img" src="/image/cloud@2x.png" alt=""/>
							<span>云购</span>
						</Link>
					</div>
					<div className="pure-u-1-5 footer-icon">
						<Link to='/Me'>
							<img className="pure-img" src="/image/mine@2x.png" alt=""/>
							<span>我的</span>
						</Link>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Footer;
