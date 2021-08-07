import {
    startPoll,
    endPoll,
    setRadioButtonAnswer,
    setCheckBoxAnswer,
    setUserOption,
    setUserDetails,
    setFile_s,
    deleteResultPoll
} from "./actions";

const mainState = {
    isPollStarted: false,
    radioButtonAnswer: '',
    checkBoxAnswer: '',
    userDetails: {
        option: null,
        name: '',
        surname: '',
        email:'',
        phone:'',
        address:''
    },
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
                ...mainState,
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

        case setUserOption:
            return {
                ...state,
                userDetails: {...state.userDetails, option: action.payload}
            }

        case setUserDetails:
            return {
                ...state,
                userDetails: {...state.userDetails, ...action.payload}
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
            
        case deleteResultPoll:
            return mainState

        default: return state;
    }
}

export default mainReducer
