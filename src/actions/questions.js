import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE_ONE = 'VOTE_ONE';
export const VOTE_TWO = 'VOTE_TWO';
export const REMOVE_VOTE_ONE = 'REMOVE_VOTE_ONE';
export const REMOVE_VOTE_TWO = 'REMOVE_VOTE_TWO';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function setOptionOne ({ id, userAuth, answer }) {
    console.log("called setOptionOne", id, userAuth, answer)
    return {
        type: VOTE_ONE,
        id,
        userAuth,
        answer
    }
}

// TODO: handle failure of API
// function unsetOptionOne ({ id, userAuth }) {
//     return {
//         type: REMOVE_VOTE_ONE,
//         id,
//         userAuth
//     }
// }

export function answerOptionOne (info) {
    console.log("inside answerOptionOne what is info? ", info);
    console.log("\n\nconverted\n",{qid: info.id, authedUser: info.userAuth, answer: info.answer});
    return (dispatch) => {
        dispatch(setOptionOne(info))

        return saveQuestionAnswer({qid: info.id, authedUser: info.userAuth.id, answer: info.answer})
        .catch((e) => {
          console.warn('Error in answerOptionOne: ', e);
        //   dispatch(unsetOptionOne(info));
          alert('Error voting for this question. Please try it again.');
        })
    }
}

function setOptionTwo ({ id, userAuth, answer }) {
    console.log("called setOptionTwo", id, userAuth, answer)
    return {
        type: VOTE_TWO,
        id,
        userAuth,
        answer
    }
}

// TODO: handle failure of API
// function unsetOptionTwo ({ id, userAuth }) {
//     return {
//         type: REMOVE_VOTE_TWO,
//         id,
//         userAuth
//     }
// }

export function answerOptionTwo (info) {
    console.log("inside answerOptionTwo what is info? ", info);
    console.log("\n\nconverted\n",{qid: info.id, authedUser: info.userAuth, answer: info.answer});
    return (dispatch) => {
        dispatch(setOptionTwo(info))

        return saveQuestionAnswer({qid: info.id, authedUser: info.userAuth.id, answer: info.answer})
        .catch((e) => {
          console.warn('Error in answerOptionTwo: ', e);
        //   dispatch(unsetOptionTwo(info));
          alert('Error voting for this question. Please try it again.');
        })
    }
}