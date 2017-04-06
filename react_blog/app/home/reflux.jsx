// 此文件是一个reflux的demo，对官方所给的案例，进行的部分修改，需要注意bind的绑定（思考什么时候需要什么时候不需要），Counter直接继承自reflux，新版的4.6.1的reflux中，reflux有继承自react，
// 但是在开头import的时候还是需要import组件react
import Reflux from 'reflux';
import React from 'react';

let Actions = Reflux.createActions([
    'increment',
    'decrement',
    'changeBy'
]);

class CounterStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {count: 6};
        this.listenables = Actions;
    }

    onIncrement()
    {
        this.setState({count: this.state.count+1});
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

class Counter extends Reflux.Component
{
    constructor(props)
    {
        super(props);
        this.store = CounterStore;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.count);
        Actions.increment();
    }

    render()
    {
        return(
            <div>
                {/*<input type="button" value="Focus the text input" onClick={this.handleClick} />*/}
                <div onClick={Actions.increment}>{this.state.count}</div>
            </div>
        );
    }
}


// setInterval(Actions.increment, 1000);

module.exports = Counter;