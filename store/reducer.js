import { SET_STATE, UPDATE_CATEGORY, DELETE_CATEGORY, ADD_CATEGORY } from './action'
import { storeData, getData } from './localStorage'


const itemsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SET_STATE:
            newState = action.state;
            return newState;
        case UPDATE_CATEGORY:
            newState = { ...state };
            newState.categories.forEach(category => {
                if (category.id == action.idToUpdate) {
                    category.name = action.newName;
                }
            });
            storeData(newState);
            return newState;
        case DELETE_CATEGORY: // TODO: delete everywhere(archieve, todayItems)
            newState = { ...state };
            newState.categories = newState.categories.filter(category => category.id != action.idToDelete);
            storeData(newState);
            return newState;
        case ADD_CATEGORY:
            newState = { ...state };
            let freeId = newState.freeId;
            let categoryToAdd = {
                id: freeId,
                name: action.categoryName,
                items: []
            };
            newState.freeId = freeId + 1;
            newState.categories.push(categoryToAdd)
            storeData(newState);
            return newState;
        default:
            return state;
    }
}

export default itemsReducer;