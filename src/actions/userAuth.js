export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function setCurrentUser (id) {
    return {
        type: SET_CURRENT_USER,
        id
    }
}

export function logoutUser () {
    return {
        type: LOGOUT_USER,
        id: null
    }
}