import axios from "../BaseApi";
import { put, takeLatest, call } from "redux-saga/effects";

import { Request } from "../../../interfaces";
import { AUTH_LOGOUT, logoutFailure, logoutSuccess } from "../../actions";
import instance from "../BaseApi";
import logoutInstance, { logout } from "../Base";
const signupUrl = `/auth/sign-up`;

// function register(payload: Record<string, unknown>) {
//   console.log(payload)

//   console.log(axios.post("http://localhost:3000/auth/sign-up", payload));

// }
// const logout = async () => {
//     const { data } = await logoutInstance.post(
//         "/auth/sign-out",
//         null,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       );
//       return data;
//     // localStorage.setItem('userInfo', JSON.stringify(data));

// };

function* doLogout(): any {

    try {
       

            const response = yield call(logout);
            localStorage.removeItem('userInfo');
            yield put(
                logoutSuccess({
                   response
                })
            );

            // localStorage.setItem('username',response.username);
        // yield put({
        //   type: request.response?.success?.type,
        //   payload: {
        //     request: request.payload,
        //     componentId: request.componentId,
        //     response: response.data
        //   }
        // });

    } catch (e: any) {
        yield put(
            logoutFailure({
                error: e.message,
            })
        );
    }
}


export default function* watchLogout() {
    yield takeLatest(AUTH_LOGOUT, doLogout);
}
