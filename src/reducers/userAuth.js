import { SET_CURRENT_USER, LOGOUT_USER } from '../actions/userAuth';

export default function userAuth (state = null, action) {
    switch(action.type) {
        case SET_CURRENT_USER :
            return action.id
        case LOGOUT_USER :
            console.log("wth is state?", state)
            return null
        default :
            return state
    }
}