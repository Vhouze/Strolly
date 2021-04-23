// ceci est un exemple

import {ADDELEMENT,DELELEMENT,EDITELEMENT} from './actionTypes';

export const addElement = (element) => ({
    type : ADDELEMENT,
    payload: element,
});

export const delElement = (element) => ({
    type : DELELEMENT,
    payload: element,
});

export const editElement = (element) => ({
    type : EDITELEMENT,
    payload: element,
});
