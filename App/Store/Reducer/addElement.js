

import {LOCALISATION,MOODPICK, DATABACK, BARPICK} from '../Actions/actionTypes';


 const initialState = { 
     barPick: {},
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

       case BARPICK:
           return {...state , barPick:  action.payload};
             
        default:
            return state;
    }
};