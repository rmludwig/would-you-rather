import { SET_CURRENT_USER, LOGOUT_USER } from '../actions/userAuth';

export default function userAuth (state = null, action) {
    switch(action.type) {
        case SET_CURRENT_USER :
            return action.id
        case LOGOUT_USER :
            return null
        default :
            return state
    }
}