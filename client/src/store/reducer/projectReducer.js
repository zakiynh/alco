import { GET_PROJECT } from "../actions/actionType";

const initialState = {
    project: [],
};

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload,
            };
        default:
            return state;
    }
}

export default projectReducer;