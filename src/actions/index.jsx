import * as types from '../constants/index'

export const SetActive = (data) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_ACTIVE,
            payload: data
        })
    }
}