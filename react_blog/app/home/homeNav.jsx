require('./homeNav.css');
require('../lib/swiper.min.css');
import {Link } from 'react-router';
let Swiper_banner = require('../lib/swiper.min.js');
import React from 'react';
import  Scrollbar  from './Scrollbar.jsx';
import Func from '../lib/func.jsx'
import Reflux from 'reflux';
import HomeStore from './homeStore.jsx';
import HomeActions from './homeAction.jsx';

class ImgComponent extends React.Component{
	render() {
		let describe = this.props.describe;
		let dataSrc = this.props.dataSrc;
		let targetUrl = this.props.targetUrl;
		let id = this.props.id;
		return (
			<div className="swiper-slide" key={id}>
				<a href={targetUrl} target="__blank">
					<img className="img" src={dataSrc}/>
				</a>
				<p>{describe}</p>
			</div>
		);
	}
};

class Nav extends Reflux.Component{
	constructor(props){
		super(props);
		this.store = HomeStore;
		this.state = {
			publish_info:[]
		}
        // this.callbackImg = this.callbackImg.bind(this);
		this.callbackPublish = this.callbackPublish.bind(this);
    };

    callbackPublish (json) {
    	this.setState({publish_info:json['lists']});
	}

	componentDidMount() {
		new Swiper_banner ('.lb1', {
			loop: true,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay : 3000,
			autoplayDisableOnInteraction : false,
		});

		Func.getFetch('https://api.51yourdream.com/v1_0/common/notice/lists',this.callbackPublish,'post');
	}
	render(){
		let imgs = this.state.imgUrls.map(function (img) {
			return (
				<ImgComponent describe={img.describe} dataSrc={img.pic_name} targetUrl={img.redirect_url}></ImgComponent>
			);
		});
		return (
			<div className="main-container" >
				<div className="empty-header"></div>
				<div className="nav-info">
					<div className="swiper-container lb1">
						<div className="swiper-wrapper">
                            {imgs}
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>

				<div className="publish-info">
					<div className='publish-title' onClick={HomeActions.getDataLB}>
						<img src="/image/mark@2x.png" alt=""/>
						<a href="" className="publish-center">公告、通知</a>
						<a href="" className="publish-more">更多>></a>
						<div className="line-1"></div>
					</div>
					<ul className="detail-info">
                        {this.state.publish_info.map(function (data) {
							return (<li> 【{data.title}】 {data.content}</li>);
                        })}
						<li>
							<Link to='/Game'>
								信息2
							</Link>
						</li>
					</ul>
					<div className="line-gray"></div>
				</div>

				<div className="hot-shopping clearfix">
					<div className='publish-title'>
						<img src="/image/mark@2x.png" alt=""/>
						<a href="" className="publish-center">热门云购</a>
						<a href="" className="publish-more">更多>></a>
						<div className="line-1"></div>
					</div>

					<div className="g-hot-con clearfix">
						<ul>
							<li className="g-hot-pic"><a href='' target="_blank"><img id="img_93981" alt="宝马（BMW）2017款 320i  M运动型" src="http://www.1yg.com/productImg/show/1125/1475136921709.jpg" /></a></li>
							<li className="g-hot-name"><a href="" target="_blank">宝马 2017款 320i M运动型</a></li>
							<li className="gray">价值：￥388880.00</li>
							<li className="g-progress">
								<div className="clearfix">
									<div className="table-range"><div className="table-range-1"></div></div>
									<div className="join">999<br/>已参与</div>
									<div className="need">999<br/>总需</div>
									<div className="left">999<br/>剩余</div>
								</div>
							</li>
							<li className="begin-shopping"><a href="" target="_blank" title="立即1元购">立即一元云购</a></li>
						</ul>

						<ul>
							<li className="g-hot-pic"><a href='' target="_blank"><img id="img_93981" alt="宝马（BMW）2017款 320i  M运动型" src="http://img.1yyg.net/goodspic/pic-200-200/20170323140223728.jpg" /></a></li>
							<li className="g-hot-name"><a href="" target="_blank">宝马 2017款 320i M运动型</a></li>
							<li className="gray">价值：￥388880.00</li>
							<li className="g-progress">
								<div className="clearfix">
									<div className="table-range"><div className="table-range-1"></div></div>
									<div className="join">999<br/>已参与</div>
									<div className="need">999<br/>总需</div>
									<div className="left">999<br/>剩余</div>
								</div>
							</li>
							<li className="begin-shopping"><a href="" target="_blank" title="立即1元购">立即一元云购</a></li>
						</ul>
					</div>
					<div className="line-gray"></div>
				</div>

				<div className="game-info">
					<div className='publish-title'>
						<img src="/image/mark@2x.png" alt=""/>
						<a href="" className="publish-center">游戏推荐</a>
						<a href="" className="publish-more">更多>></a>
						<div className="line-1"></div>
					</div>

					<Scrollbar/>
				</div>
				<div className="empty-footer"></div>

			</div>
		);
	};
}

module.exports = Nav;
