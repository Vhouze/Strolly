import {LOCALISATION, MOODPICK, DATABACK} from './actionTypes';

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