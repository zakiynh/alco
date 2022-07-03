import { GET_NERACA } from "../actions/actionType";

const initialState = {
    neraca: [],
}

function neracaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NERACA:
            return {
                ...state,
                neraca: action.payload,
            };
        default:
            return state;
    }
}

export default neracaReducer;