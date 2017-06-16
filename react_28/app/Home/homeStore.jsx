import Reflux from 'reflux';
import HomeActions from './homeAction.jsx'
import Func from '../lib/func.jsx'

class HomeStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {imgUrls: [  //注意初始字段类型一定要给
        {
            describe:'',
            pic_name:'',
            redirect_url:''
        }
        ]}
        this.listenables = HomeActions;
        this.callbackImg = this.callbackImg.bind(this);
    }

    callbackImg (json) {
        this.setState({imgUrls:json});
    }

    onGetDataLB()
    {
        Func.getFetch('https://api.51yourdream.com/v1_0/common/lunbo/lists',this.callbackImg,'post');
    }

    onDecrement()
    {
        this.setState({count: this.state.count-1});
    }

    onChangeBy(amount)
    {
        this.setState({count: this.state.count+amount});
    }
}

module.exports = HomeStore;