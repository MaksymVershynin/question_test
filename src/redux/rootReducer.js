// import { combineReducers } from 'redux';

import {
    startPoll,
    endPoll,
    setRadioButtonAnswer,
    setCheckBoxAnswer,

    deleteResultPoll
} from "./actions";

const mainState = {
    isPollStarted: false,
    radioButtonAnswer: null,
    checkBoxAnswer: null,
    // userDetails: null,
    // file: null,
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

        case setCheckBoxAnswer:
            return {
                ...state,
                checkBoxAnswer: action.action
            }

        // case setRadioButtonAnswer:
        //     return {
        //         ...state,
        //             radioButtonAnswer: action.action
        //         }
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
