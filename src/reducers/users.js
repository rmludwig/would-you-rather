import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_ANSWER :
            return {
                ...state,
                [action.userAuth.id]: {
                    ...state[action.userAuth.id],
                    answers: {
                        ...state[action.userAuth.id].answers,
                        [action.id]: action.answer
                    }
                }
            }
        case ADD_USER_QUESTION :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    questions: state[action.id].questions.concat([action.question_id])
                }
            }
        default :
            return state
    }
}