// import { combineReducers } from 'redux';

import {
    startPoll,
    endPoll,
    setRadioButtonAnswer
} from "./actions";

const mainState = {
    isPollStarted: false,
    radioButtonAnswer: null,

}

const mainReducer = (state = mainState, action) => {
    switch (action.type) {
        case startPoll:
            return {
                ...state,
                isPollStarted: true
            }
        case endPoll:
            return {
                ...state,
                isPollStarted: false
            }
        case setRadioButtonAnswer:
            return {
                ...state,
                radioButtonAnswer: action.action
            }
            

        default: return state;
    }
}

export default mainReducer
