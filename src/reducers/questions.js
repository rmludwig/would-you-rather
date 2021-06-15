import { RECEIVE_QUESTIONS, ADD_QUESTION, VOTE_ONE, VOTE_TWO } from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            }
        case VOTE_ONE :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    optionOne: {
                        text: state[action.id].optionOne.text,
                        votes: state[action.id].optionOne.votes.concat([action.userAuth.id])
                    }
                }
            }
        case VOTE_TWO :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    optionTwo: {
                        text: state[action.id].optionTwo.text,
                        votes: state[action.id].optionTwo.votes.concat([action.userAuth.id])
                    }
                }
            }
        default :
            return state
    }
}