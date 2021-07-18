export const startPoll = "START_POLL";
export const endPoll = 'END_POOL';
export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
// export const setRadioButtonAnswer = "SET_RADIO_ANSWER";
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
        action: data
    };
};


// export const endPoll_AC = (data) => {setRadioButtonAnswer
//     return {
//         type: endPoll
//     };
// };


// export const endPoll_AC = (data) => {setRadioButtonAnswer
//     return {
//         type: endPoll
//     };
// };


// export const endPoll_AC = (data) => {setRadioButtonAnswer
//     return {
//         type: endPoll
//     };
// };


// export const endPoll_AC = (data) => {setRadioButtonAnswer
//     return {
//         type: endPoll
//     };
// };