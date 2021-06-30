import { SET_STATE, UPDATE_CATEGORY } from './action'
import { storeData, getData } from './localStorage'


const itemsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SET_STATE:
            newState = action.state;
            return newState;
        default:
            return state;
        case UPDATE_CATEGORY:
            newState = {...state}
            newState.categories.forEach(category => {
                if(category.id == action.idToUpdate){
                    category.name = action.newName
                }
            });
            storeData(newState)
            return newState;
    }
}

export default itemsReducer;