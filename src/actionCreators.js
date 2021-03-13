import * as actions from './actionType';



export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description,
    }  
})



/*export function bugAdded(description) {
    return{
        type: actions.BUG_ADDED,
        payload: {
            description: description,
        }  
    };
}*/

export function bugRemoved(id){
    return{
        type: actions.BUG_REMOVED,
        payload: {
            id: id,
        }
    }
}