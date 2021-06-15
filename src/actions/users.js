export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

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

export function setUserQuestion (info) {
    return {
        type: ADD_USER_QUESTION,
        id: info.question.author,
        question_id: info.question.id
    }
}