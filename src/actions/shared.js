import { loadAppData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { logoutUser, setCurrentUser } from './userAuth';

const TEST_USER = 'johndoe';

export function fetchAllAppData () {
    return (dispatch) => {
        return loadAppData()
            .then(({questions, users}) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(setCurrentUser(TEST_USER));
                dispatch(logoutUser());
            })
    }
}