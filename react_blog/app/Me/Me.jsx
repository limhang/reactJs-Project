import React from 'react';
import Reflux from 'reflux';
import MeStore from './MeStore.jsx';
import MeActions from './MeActions.jsx';
import MeCollectionView from './MeCollectionView.jsx';
import MeHeader from './MeHeader.jsx';
require('./Me.css');

class Me extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = MeStore;
    }

    render() {
        let datasource_info = [
            {icon:'/image/mark@2x.png',title:'在线支付',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'马上提现',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'收款账号',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'提现记录',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'我的银行',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'修改密码',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'个人资料',dataLink:'/Game'}]

        let datasource_mode = [
            {icon:'/image/mark@2x.png',title:'模式一',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'模式二',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'模式三',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'模式四',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'模式五',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'模式六',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'更多',dataLink:'/Game'}]

        let datasource_tool = [
            {icon:'/image/mark@2x.png',title:'邀请好友',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'我的下线',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'推广收益',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'红包领取',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'每日返利',dataLink:'/Game'},
            {icon:'/image/mark@2x.png',title:'首冲奖励',dataLink:'/Game'}]

        return(
            <div>
                <div className="empty-header"></div>
                    <MeHeader/>
                    <MeCollectionView header_icon={'/image/mark@2x.png'} header_title={'账户信息'} datasource={datasource_info}/>
                    <MeCollectionView header_icon={'/image/mark@2x.png'} header_title={'我的模式'} datasource={datasource_mode}/>
                    <MeCollectionView header_icon={'/image/mark@2x.png'} header_title={'乐斗工具'} datasource={datasource_tool}/>
                <div className="empty-footer"></div>
            </div>
        )
    }
}

module.exports = Me;