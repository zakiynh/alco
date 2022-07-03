import { LOGIN_SUCCESS } from "./actionType";
import swal from "../../helpers/swal";

const BASE_URL = "http://localhost:3000";

export function login(user) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const { data } = await response.json();
            if (!response.ok) throw data.message;
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("email", data.email);
            localStorage.setItem("name", data.name);
            swal("success", "Login success", "success");
            return dispatch({ type: LOGIN_SUCCESS, payload: data });
        } catch (err) {
            swal("err: ", err, "error");
        }
    };
}
