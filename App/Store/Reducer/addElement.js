

import {LOCALISATION} from '../Actions/actionTypes';
import {dataMap} from '../../Components/Maps/DataMap';

 const initialState = { coords : {
    latitude: 45.76612748153259,
    longitude: 4.83441214610266}} ;



export const addElementReducer = (state = initialState, action) => 
{
    switch(action.type){

       case LOCALISATION:
           return {...state , coords:  action.payload};
             
        default:
            return state;
    }
};