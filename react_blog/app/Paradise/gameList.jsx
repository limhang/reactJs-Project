require('./gameList.css');
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
import React from 'react';
import fetch from 'isomorphic-fetch';

let GameType = React.createClass({
	render: function() {
		let gameTypeId = this.props.gameTypeId;
		let gameTypeName = this.props.gameTypeName;
		return (
			<div className="swiper-slide game-type" id={gameTypeId}>{gameTypeName}</div>
		);
	}
});
let Game = React.createClass({
	render: function() {
		let gameId = this.props.gameId;
		let gameName = this.props.gameName;
		let gameStatus = this.props.gameStatus;
		return (
			<div className="pure-u-1-4  game" id={gameId}>
				<div className="game-name">{gameName}</div>
				<div className="pure-g game-tips">
					<div className="pure-u-3-5 tips-words">
						Game
					</div>
					<div className="pure-u-2-5">
						<img className="pure-img status-img" src="/image/mark@2x.png" alt=""/>
					</div>
				</div>
			</div>
		);
	}
});
let GameList = React.createClass({
	getInitialState: function() {
        return {
        	gameTypes: [
				{
					id:1,
					game_name:"北京28",
				},
				{
					id:2,
					game_name:"北京36",
				},
				{
					id:3,
					game_name:"广东28",
				},
				{
					id:4,
					game_name:"广东28",
				},
				{
					id:5,
					game_name:"广东28",
				},
				{
					id:6,
					game_name:"广东28",
				},
				{
					id:7,
					game_name:"广东28",
				},{
					id:8,
					game_name:"广东28",
				},
				{
					id:9,
					game_name:"广东28",
				},
				{
					id:10,
					game_name:"广东28",
				},
				{
					id:11,
					game_name:"广东28",
				},
				{
					id:12,
					game_name:"广东28",
				},
				{
					id:13,
					game_name:"广东28",
				},
				{
					id:14,
					game_name:"广东28",
				},
				{
					id:15,
					game_name:"最后一个",
				},
			],
			games: [
				{
					id:1,
					game_name:"北京28",
					status:1
				},
				{
					id:2,
					game_name:"北京36",
					status:1
				},
				{
					id:3,
					game_name:"广东28",
					status:1
				},
				{
					id:4,
					game_name:"广东28",
					status:1
				},
				{
					id:5,
					game_name:"广东28",
					status:1
				},
				{
					id:6,
					game_name:"广东28",
					status:1
				},
				{
					id:7,
					game_name:"广东28",
					status:1
				},{
					id:8,
					game_name:"广东28",
					status:1
				},
				{
					id:9,
					game_name:"广东28",
					status:1
				},
				{
					id:10,
					game_name:"广东28",
					status:1
				},
				{
					id:11,
					game_name:"广东28",
					status:1
				},
				{
					id:12,
					game_name:"广东28",
					status:1
				},
				{
					id:13,
					game_name:"广东28",
					status:1
				},
				{
					id:14,
					game_name:"广东28",
					status:1
				},
				{
					id:15,
					game_name:"最后一个",
					status:1
				},
				{
					id:13,
					game_name:"广东28",
					status:1
				},
				{
					id:14,
					game_name:"广东28",
					status:1
				},
				{
					id:15,
					game_name:"最后一个",
					status:1
				},
				{
					id:13,
					game_name:"广东28",
					status:1
				},
				{
					id:14,
					game_name:"广东28",
					status:1
				},
				{
					id:15,
					game_name:"最后一个",
					status:1
				},
				{
					id:13,
					game_name:"广东28",
					status:1
				},
				{
					id:14,
					game_name:"广东28",
					status:1
				},
				{
					id:15,
					game_name:"最后一个",
					status:1
				},
				{
					id:13,
					game_name:"广东28",
					status:1
				},
				{
					id:14,
					game_name:"广东28",
					status:1
				},
				{
					id:15,
					game_name:"最后一个",
					status:1
				},
				{
					id:14,
					game_name:"广东28",
					status:1
				},
				{
					id:15,
					game_name:"21212",
					status:1
				},
			],
        };
	},
	componentDidMount: function() {
		new Swiper('.game-type-container .swiper-container',{
			freeMode : true,
			direction:'vertical',
			freeModeMomentumRatio:1,
			grabCursor:true,
			slidesPerView:'auto',
			freeModeSticky:true
		});
		new Swiper('.sing-game-container .swiper-container',{
			freeMode : true,
			direction:'vertical',
			freeModeMomentumRatio:1,
			grabCursor:true,
			slidesPerView:'auto',
			freeModeSticky:true,
			slidesPerColumn:3,
			slidesPerColumnFill : 'row',
		});
		//动态这设置 高度
		let header_height = document.querySelector("#header").clientHeight;
		let footer_height = document.querySelector("#footer").clientHeight;
		let content = document.querySelector("#content");
		let swiper_containers = document.querySelectorAll('.game-container .swiper-container');
		let w_h = Func.getViewportSize();
		for (let i=0;i<swiper_containers.length;i++){
			swiper_containers[i].style.height = (w_h.height - header_height - footer_height )+'px';
		}
		content.style.marginTop=header_height+'px';
		content.style.marginBottom=footer_height+'px';
		let data = Func.getFetch('https://api.51yourdream.com/v1_0/common/lunbo/lists',{method:'post'});


	},
	render: function() {
		let GameTypes = this.state.gameTypes.map(function (gameType) {
			return (
				<GameType gameTypeId={gameType.id} gameTypeName={gameType.game_name}></GameType>
			);
		});
		let Games = this.state.games.map(function (game) {
			return (
				<Game gameId={game.id} gameName={game.game_name} gameStatus={game.status}></Game>
			);
		});
		return (
			<div className="game-container">
				<div className="pure-g">
					<div className="pure-u-1-5">
						<div className="game-type-container">
							<div className="swiper-container">
								<div className="swiper-wrapper">
									{GameTypes}
								</div>
							</div>
						</div>
					</div>
					<div className="pure-u-4-5">
						<div className="sing-game-container">
							<div className="swiper-container">
								<div className="swiper-wrapper">
									<div className="pure-g">
											{Games}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = GameList;