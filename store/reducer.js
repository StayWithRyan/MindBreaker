import {
    SET_STATE, UPDATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY_ITEMS_IS_ARCHIVED,
    ADD_CATEGORY, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, UPDATE_ITEM_IS_ARCHIVED,
    UPDATE_REFRESHED_ITEM, UPDATE_SKIPPED_ITEM
} from './action'
import { storeData } from './localStorage'
import { getDate } from '../helpers/dateHelder'

const itemsReducer = (state = {}, action) => {
    let newState;
    let freeId;
    let category;
    let item;
    switch (action.type) {
        case SET_STATE:
            newState = action.state;
            return newState;
        case UPDATE_CATEGORY:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.idToUpdate);
            category.name = action.newName;
            storeData(newState);
            return newState;
        case DELETE_CATEGORY:
            newState = JSON.parse(JSON.stringify(state));
            newState.categories = newState.categories.filter(category => category.id != action.idToDelete);
            storeData(newState);
            return newState;
        case ADD_CATEGORY:
            newState = JSON.parse(JSON.stringify(state));
            freeId = newState.freeId;
            let categoryToAdd = {
                id: freeId,
                name: action.categoryName,
                items: []
            };
            newState.freeId = freeId + 1;
            newState.categories.push(categoryToAdd)
            storeData(newState);
            return newState;
        case ADD_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            freeId = newState.freeId;
            let itemToAdd = {
                id: freeId,
                name: action.itemName,
                description: action.itemDescription,
                refreshes: [
                ],
                isArchived: false,
                skippedDate: null
            };
            newState.freeId = freeId + 1;
            newState.categories.find(category => category.id == action.categoryIdToAdd).items.push(itemToAdd)
            storeData(newState);
            return newState;
        case DELETE_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.categoryId)
            category.items = category.items.filter(item => item.id != action.idToDelete);
            storeData(newState);
            return newState;
        case UPDATE_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.categoryId)
            item = category.items.find(item => item.id == action.idToUpdate)
            item.name = action.newName;
            item.description = action.newDescription;
            storeData(newState);
            return newState;
        case UPDATE_ITEM_IS_ARCHIVED:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.categoryId)
            item = category.items.find(item => item.id == action.itemId)
            item.isArchived = action.isArchived;
            storeData(newState);
            return newState;
        case UPDATE_CATEGORY_ITEMS_IS_ARCHIVED:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.categoryId)
            category.items.forEach(item => {
                item.isArchived = action.isArchived
            });
            storeData(newState);
            return newState;
        case UPDATE_SKIPPED_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.categoryId)
            item = category.items.find(item => item.id == action.itemId)
            item.skippedDate = getDate();
            storeData(newState);
            return newState;
        case UPDATE_REFRESHED_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            category = newState.categories.find(category => category.id == action.categoryId)
            item = category.items.find(item => item.id == action.itemId)
            item.skippedDate = null;
            if (item.refreshes.length === 6) {
                item.refreshes = [];
                item.isArchived = true;
            }
            else {
                item.refreshes.push(getDate());
            }
            storeData(newState);
            return newState;
        default:
            return state;
    }
}

export default itemsReducer;