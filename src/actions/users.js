export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export function receiveUsers (users) {
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function setUserAnswer ({id, userAuth, answer}) {
    return {
        type: ADD_USER_ANSWER,
        id,
        userAuth,
        answer
    }
}

