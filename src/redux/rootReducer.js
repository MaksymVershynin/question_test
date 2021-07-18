// import { combineReducers } from 'redux';

import {
    startPoll,
    endPoll,
    setRadioButtonAnswer,
    setCheckBoxAnswer,
    setUserDetails,
    setFile_s,
    deleteResultPoll
} from "./actions";

const mainState = {
    isPollStarted: false,
    radioButtonAnswer: null,
    checkBoxAnswer: null,
    userDetails: null,
    file_s: null,
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
                radioButtonAnswer: action.payload
            }

        case setCheckBoxAnswer:
            return {
                ...state,
                checkBoxAnswer: action.payload
            }

        case setUserDetails:
            return {
                ...state,
                userDetails: action.payload
            }

        case setFile_s:
            return {
                ...state,
                file_s: action.payload
            }

        // case setRadioButtonAnswer:
        //     return {
        //         ...state,
        //         radioButtonAnswer: action.action
        //     }

        // case setRadioButtonAnswer:
        //     return {
        //         ...state,
        //         radioButtonAnswer: action.action
        //     }
            
        case deleteResultPoll:
            return mainState

        default: return state;
    }
}

export default mainReducer
