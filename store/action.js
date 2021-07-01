export const SET_STATE = 'SET_STATE'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'

export const setState = (state) => {
    return {type: SET_STATE, state : state}
}

export const updateCategory = (idToUpdate, newName) => {
    return {type: UPDATE_CATEGORY, idToUpdate, newName}
}

export const deleteCategory = (idToDelete) => {
    return {type: DELETE_CATEGORY, idToDelete}
}

export const addCategory = (categoryName) => {
    return {type: ADD_CATEGORY, categoryName}
}