import { SET_CURRENT_USER } from '../actions/userAuth';

export default function userAuth (state = null, action) {
    switch(action.type) {
        case SET_CURRENT_USER :
            return action.id
        default :
            return state
    }
}