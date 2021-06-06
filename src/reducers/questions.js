import { RECEIVE_QUESTIONS, VOTE_ONE, VOTE_TWO } from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case VOTE_ONE :
            console.log("Deep inside question reducer: action = ", action);
            console.log("AND ", action.id);
            console.log("THIS ", state[action.id]);
            console.log("SNOT FUN ", state[action.id].optionOne.text);
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
            console.log("Deep inside question reducer: action = ", action);
            console.log("AND ", action.id);
            console.log("THIS ", state[action.id]);
            console.log("SNOT FUN ", state[action.id].optionTwo.text);
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