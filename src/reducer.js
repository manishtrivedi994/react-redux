import * as actions from './actionType';

let lastId = 0;

export default function reducer(state = [], action) {
    switch(action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
            break;
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
            break;
        default :
            return state;

            
    }

    /*if(action.type === 'addedBug') {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    }
    else if(action.type === 'bugRemoved'){
        return state.filter(bug => bug.id !== action.payload.id);
    }

    return state;*/
}