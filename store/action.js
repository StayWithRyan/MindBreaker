export const SET_STATE = 'SET_STATE'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const UPDATE_CATEGORY_ITEMS_IS_ARCHIVED = 'UPDATE_CATEGORY_ITEMS_IS_ARCHIVED'

export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM_IS_ARCHIVED = 'UPDATE_ITEM_IS_ARCHIVED'


export const UPDATE_REFRESHED_ITEM = 'UPDATE_REFRESHED_ITEM'
export const UPDATE_SKIPPED_ITEM = 'UPDATE_SKIPPED_ITEM'

export const setState = (state) => {
    return { type: SET_STATE, state: state }
}

export const updateCategory = (idToUpdate, newName) => {
    return { type: UPDATE_CATEGORY, idToUpdate, newName }
}

export const deleteCategory = (idToDelete) => {
    return { type: DELETE_CATEGORY, idToDelete }
}

export const addCategory = (categoryName) => {
    return { type: ADD_CATEGORY, categoryName }
}

export const updateCategoryItemsIsArchived = (categoryId, isArchived) => {
    return { type: UPDATE_CATEGORY_ITEMS_IS_ARCHIVED, categoryId, isArchived }
}

export const updateItem = (categoryId, idToUpdate, newName, newDescription) => {
    return { type: UPDATE_ITEM, categoryId, idToUpdate, newName, newDescription }
}

export const deleteItem = (categoryId, idToDelete) => {
    return { type: DELETE_ITEM, categoryId, idToDelete }
}

export const addItem = (categoryIdToAdd, itemName, itemDescription) => {
    return { type: ADD_ITEM, categoryIdToAdd, itemName, itemDescription }
}

export const updateItemIsArchived = (categoryId, itemId, isArchived) => {
    return { type: UPDATE_ITEM_IS_ARCHIVED, categoryId, itemId, isArchived }
}

export const updateRefreshedItem = (categoryId, itemId) => {
    return { type: UPDATE_REFRESHED_ITEM, categoryId, itemId }
}

export const updateSkippedItem = (categoryId, itemId) => {
    return { type: UPDATE_SKIPPED_ITEM, categoryId, itemId }
}