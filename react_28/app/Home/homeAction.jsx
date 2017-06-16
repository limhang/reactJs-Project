import Reflux from 'reflux';

let HomeActions = Reflux.createActions([
    'getDataLB',
    'decrement',
    'changeBy'
]);

module.exports =  HomeActions;