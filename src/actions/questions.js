import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { setUserAnswer, setUserQuestion } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const VOTE_ONE = 'VOTE_ONE';
export const VOTE_TWO = 'VOTE_TWO';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function setNewPollQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addPollQuestion (info) {
    return (dispatch) => {
        return saveQuestion({
            author: info.author,
            optionOneText: info.optionOneText,
            optionTwoText: info.optionTwoText
        })
        .catch((e) => {
            console.warn('Error in addPollQuestion: ', e);
            // TODO: It does not appear that DATA_.js will return error, but if
            // it did this is where error handling would remove the update from redux.
            alert('Error adding your question. Please try it again.');
        })
        .then((question) => dispatch(setNewPollQuestion(question)))
        .then((question) => dispatch(setUserQuestion(question)));
    }
}

function setOptionOne ({ id, userAuth, answer }) {
    return {
        type: VOTE_ONE,
        id,
        userAuth,
        answer
    }
}

export function answerOptionOne (info) {
    return (dispatch) => {
        dispatch(setOptionOne(info));
        dispatch(setUserAnswer(info));

        return saveQuestionAnswer({qid: info.id, authedUser: info.userAuth.id, answer: info.answer})
        .catch((e) => {
            console.warn('Error in answerOptionOne: ', e);
            // TODO: It does not appear that DATA_.js will return error, but if
            // it did this is where error handling would remove the update from redux.
            alert('Error voting for this question. Please try it again.');
        });
    }
}

function setOptionTwo ({ id, userAuth, answer }) {
    return {
        type: VOTE_TWO,
        id,
        userAuth,
        answer
    }
}

export function answerOptionTwo (info) {
    return (dispatch) => {
        dispatch(setOptionTwo(info));
        dispatch(setUserAnswer(info));

        return saveQuestionAnswer({qid: info.id, authedUser: info.userAuth.id, answer: info.answer})
        .catch((e) => {
            console.warn('Error in answerOptionTwo: ', e);
            // TODO: It does not appear that DATA_.js will return error, but if
            // it did this is where error handling would remove the update from redux.
            alert('Error voting for this question. Please try it again.');
        });
    }
}