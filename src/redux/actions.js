export const startPoll = "START_POLL";
export const endPoll = 'END_POOL';
export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
export const deleteResultPoll = "DELETE_RESULT_POLL";
export const setCheckBoxAnswer = "DELETE_RESULT_POLL";
export const setUserDetails = "SET_USER_DETAILS";
export const setFile_s = "SET_FILE_S";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";

export const startPoll_AC = () => {
    return {
        type: startPoll
    };
};
export const endPoll_AC = () => {
    return {
        type: endPoll
    };
};

export const setRadioButtonAnswer_AC = (data) => {
    return {
        type: setRadioButtonAnswer,
        payload: data
    };
};

export const setCheckBoxAnswer_AC = (data) => {
    return {
        type: setCheckBoxAnswer,
        payload: data
    };
};


export const setFile_s_AC = (data) => {
    return {
        type: setFile_s,
        payload: data
    };
};


// export const endPoll_AC = (data) => {
//     return {
//         type: endPoll
//     };
// };

export const deleteResultPoll_AC = () => {
    return {
        type: deleteResultPoll
    };
};