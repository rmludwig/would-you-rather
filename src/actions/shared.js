import { loadAppData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export function fetchAllAppData () {
    return (dispatch) => {
        return loadAppData()
            .then(({questions, users}) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
            })
    }
}