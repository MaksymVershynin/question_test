// import { combineReducers } from 'redux';

import {
    // setUserSignIn,
    // setUserConfirmed,
    setListOfCountries,
    // setUserNotificationRead,
    // setUserNotificationRequestStatus,
} from "./actions";
const countriesState = {
    countries: []
}

const countriesReducer = (state = countriesState, action) => {
    switch (action.type) {
        case setListOfCountries:
            return {
                ...state,
                countries: action.countries
            }
        default: return state;
    }
}

export default countriesReducer
/////////////////////////////////////////////////////////////////////////////////////////
// const userState = {
//     user: {},
//     relations: [],
//     notifications: [],
//     //avatar: '',
// }

// const userReducer = (state = userState, action) => {
//     switch(action.type) {
//         case setUserNotificationRead:
//             return {
//                 ...state,
//                 notifications: state.notifications
//                     .map(notif => notif.id === action.payload 
//                         ? {...notif, read: true } 
//                         : notif)
//             }
//         case setUserNotificationRequestStatus:
//             return {
//                 ...state,
//                 notifications: state.notifications
//                 .map(notif => notif.id === action.payload.notificationId
//                     ? {...notif, show_button: false, requestStatus: action.payload.requestStatus } 
//                     : notif)
//             }
//         default: return state;
//     }
// }

// /////////////////////////////////////////////////////////////////////////////////////////
// const signInState = {
//     isAuthorized: Boolean(localStorage.getItem('auth')) || false,
//     currentScreen: 'signIn',
//     onboardingDone: Boolean(localStorage.getItem('onboarding')) || false,
//     userId: '',
//     countries: []
// }

// const signInReducer = (state = signInState, action) => {
//     switch (action.type) {
//         case setUserSignIn:
//             return {
//                 ...state,
//                 user: action.user,
//             }

//         case setUserConfirmed:
//             return {
//                 ...state,
//                 isAuthorized: true,
//             }
//         default: return state;
//     }
// };
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const rootReducer = combineReducers({
//     user: userReducer,

//     auth: signInReducer,

//     countries: countriesReducer,

// });

// export default rootReducer;