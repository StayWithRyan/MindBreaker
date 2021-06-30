export const SET_STATE = 'SET_STATE'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export const setState = (state) => {
    return {type: SET_STATE, state : state}
}

export const updateCategory = (idToUpdate, newName) => {
    return {type: UPDATE_CATEGORY, idToUpdate, newName}
}