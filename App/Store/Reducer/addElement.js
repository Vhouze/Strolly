

import {LOCALISATION,MOODPICK, DATABACK} from '../Actions/actionTypes';


 const initialState = { 
     dataBack:{} , 
     moodPick:'',
     coords : {
        latitude: 45.76612748153259,
        longitude: 4.83441214610266}} ;
     


export const addElementReducer = (state = initialState, action) => 
{
    switch(action.type){

       case LOCALISATION:
           return {...state , coords:  action.payload};


       case MOODPICK:
            return {...state , moodPick:  action.payload};


            
       case DATABACK:
            return {...state , dataBack:  action.payload};
             
        default:
            return state;
    }
};