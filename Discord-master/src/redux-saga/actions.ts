
export const AUTH_LOGIN = "AUTH_LOGIN"
export const AUTH_REGISTER = "AUTH_REGISTER"
export const AUTH_LOGOUT = "AUTH_LOGOUT"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"
export const SIGNUP_SUCCESS = "AUTH_SUCCESS"
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_FAILURE = "SIGNIN_FAILURE"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
// template: ACTION_TEMP = "ACTION_TEMP
export const signupSuccess = (payload: Record<string, unknown>) => ({
    type: SIGNUP_SUCCESS,
    payload
})
export const signupFailure = (payload: Record<string, unknown>) => ({
    type: SIGNUP_FAILURE,
    payload
})
export const signinSuccess = (payload: Record<string, unknown>) => ({
    type: SIGNIN_SUCCESS,
    payload
})
export const signinFailure = (payload: Record<string, unknown>) => ({
    type: SIGNIN_FAILURE,
    payload
})
export const logoutSuccess = (payload: Record<string, unknown>) => ({
    type: LOGOUT_SUCCESS,
    payload
})
export const logoutFailure = (payload: Record<string, unknown>) => ({
    type: LOGOUT_FAILURE,
    payload
})
