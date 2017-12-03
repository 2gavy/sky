import * as Actions from '../actions/actionTypes/collab';

const initialState = {
    bubbleData: [],
    trendData: [],
    docs: [],
    titles: [],
    terms: ''
};

const collab = (state = initialState, action) => {
    switch(action.type) {
        case Actions.COLLAB_GET_CLOUD: 
            return{...state, bubbleData: action.payload};
        case Actions.COLLAB_GET_DOCLIST:
            return {...state, docs: action.payload[0].docs, titles: action.payload[0].titles};
        case Actions.COLAB_GET_TRENDDATA:
            return {...state, trendData: action.payload};
        default:
            return state;          
    }
}

export default collab;