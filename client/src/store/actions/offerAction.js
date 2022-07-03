import swal from "../../helpers/swal";
import { GET_OFFER } from "./actionType";

const BASE_URL = "http://localhost:3000/customers";

export function getOffer() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            return dispatch({ type: GET_OFFER, payload: data });
        } catch (err) {
            console.log(err);
        }
    };
}

export function getOfferId(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                }
            });
            const data = await response.json();
            return data
        } catch (err) {
            console.log(err);
        }
    };
}

export function addOffer(offer) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(offer),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            swal("success", "Offer added successfully", "success");
            return dispatch(getOffer());
        } catch (err) {
            swal("error", err.message, "error");
        }
    };
}

export function deleteOffer(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                }
            });
            const data = await response.json();
            if (!response.ok) throw data.message
            swal("success", "Offer deleted successfully", "success");
            return dispatch(getOffer());
        } catch (err) {
            swal("error", err.message, "error");
        }
    }
}

export function editOffer(id, offer) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                },
                body: JSON.stringify(offer),
            });
            const data = await response.json();
            if (!response.ok) throw data.message
            swal("success", "Offer edited successfully", "success");
            return dispatch(getOffer());
        } catch (err) {
            swal("error", err.message, "error");
        }
    }
}