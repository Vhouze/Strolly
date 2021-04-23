// ceci est un exemple

import {ADDELEMENT, DELELEMENT,EDITELEMENT} from '../Actions/actionTypes';
import Element from '../../Models/CoucheClass';
import { ActionSheetIOS } from 'react-native';

 const initialState = { listElement : [] };



export const addElementReducer = (state = initialState, action) => 
{
    switch(action.type){

       case ADDELEMENT:
           return {...state, listElement: [...state.listElement,  action.payload]};
        
        case DELELEMENT: {
            return  {...state, listElement: state.listElement.filter((element) => element.id.toString() !== action.payload.id )}
        
        };

        case EDITELEMENT: {
            return  {
                ...state, 
                listElement: state.listElement.map(
                    (element) =>  (element.id.toString == action.payload.id) ? {...element, color: action.payload, title : action.payload}
                     : element
                 )
            };
        }
             
        default:
            return state;
    }
};