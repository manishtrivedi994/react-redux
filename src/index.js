import store from './store';
import { bugAdded } from './actionCreators';
import { bugRemoved } from './actionCreators';



store.dispatch(bugAdded("bug1"));
store.dispatch(bugAdded("bug2"));
store.dispatch(bugRemoved(1));

console.log(store.getState())