
import {LOCALISATION,MOODPICK, DATABACK, BARPICK, UPDATEHISTORY} from '../Actions/actionTypes';


 const initialState = { 
     barPick: {},
     dataBack:{} , 
     moodPick:'',
     coords : {
        latitude: 45.76612748153259,
        longitude: 4.83441214610266},
     history: [
        {id: 0, title: "Cafe theatre", rating: 4, comment: "plutot pas mal pour passer l'apres midi"},
        {id: 1, title: "Docks", rating: 5, comment: "Bar parfait pour revoir ses potes"},
        {id: 2, title: "Mac Carthy", rating: 3, comment: "Les billards sont vraiment pas mal mais sinon c'est bondé h24Les billards sont vraiment pas mal mais sinon c'est bondé h24Les billards sont vraiment pas mal mais sinon c'est bondé h24Les billards sont vraiment pas mal mais sinon c'est bondé h24Les billards sont vraiment pas mal mais sinon c'est bondé h24Les billards sont vraiment pas mal mais sinon c'est bondé h24"},
        {id: 3, title: "le nouveau", rating: 0, comment: ""},
     ]
}

function updateElementHistory(state, place) {
    state.history = state.history.map((item, index) => {
        if (item.id !== place.id) {
            return item
        }
     
        return {
            ...item,
            ...place
        }
    })

    return state;
}

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
             
        case UPDATEHISTORY:
            return updateElementHistory(state, action.payload);
        default:
            return state;
    }
};