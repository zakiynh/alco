import swal from "../../helpers/swal";
import { GET_PROJECT } from "./actionType";
const BASE_URL = "http://localhost:3000/project";

export function getProject() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            return dispatch({ type: GET_PROJECT, payload: data });
        } catch (err) {
            console.log(err);
        }
    };
}

export function addProject(payload) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            swal("success", "Project created successfully", "success");
            return dispatch({ type: GET_PROJECT, payload: data });
        } catch (err) {
            console.log(err);
        }
    };
}