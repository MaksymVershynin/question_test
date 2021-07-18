export const setListOfCountries = 'SET_LIST_OF_COUNTRIES';



export const getListOfCountries = (data) => {
    return {
        type: setListOfCountries,
        countries: data.countries
    };
};