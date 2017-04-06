import Reflux from 'reflux';
import MeActions from './MeActions.jsx';
class MeStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = MeActions;
    }
    onGetDataLB() {
        console.log('xxx');
    }
}

module.exports = MeStore;