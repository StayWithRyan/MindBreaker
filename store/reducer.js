import { SET_STATE } from './action'
import { storeData, getData } from './localStorage'


const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_STATE:
            const newState = action.state;
            return newState;
        default:
            return state;
    }
}

export default itemsReducer;