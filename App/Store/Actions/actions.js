import {LOCALISATION, MOODPICK, DATABACK, BARPICK, UPDATEHISTORY, LOGIN} from './actionTypes';

export const localisation = (element) => ({
    type : LOCALISATION,
    payload: element,
});


export const moodPick = (element) => ({
    type : MOODPICK,
    payload: element,
});

export const dataBack = (element) => ({
    type : DATABACK,
    payload: element,
});

export const barPick = (element) => ({
    type : BARPICK,
    payload: element,
});

export const updateHistory = (element) => ({
    type : UPDATEHISTORY,
    payload: element,
});

export const loginUser = (element) => ({
    type : LOGIN,
    payload: element,
});