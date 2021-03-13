import store from './store';
import * as actions from './actionType';

store.subscribe(() => {
    console.log("Store changed!!", store.getState());
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1",
    }
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug2",
    }
})

console.log(store.getState())

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1,
    }
})

console.log(store.getState())