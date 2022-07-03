import { GET_NERACA, GET_NERACA_ID } from "./actionType";

const BASE_URL = "http://localhost:3000/asset"

export function getNeraca() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            return dispatch({ type: GET_NERACA, payload: data });
        } catch (err) {
            console.log(err);
        }
    }
}

export function getNeracaId(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(`BASE_URL/${id}`);
            const data = await response.json();
            return data
        } catch (err) {
            console.log(err);
        }
    }
}