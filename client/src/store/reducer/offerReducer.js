import { GET_OFFER, EDIT_OFFER } from "../actions/actionType";

const initialState = {
    offer: [],
};

function offerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_OFFER:
            return {
                ...state,
                offer: action.payload,
            };
        case EDIT_OFFER:
            return {
                ...state,
                offer: action.payload,
            };
        default:
            return state;
    }
}

export default offerReducer;
