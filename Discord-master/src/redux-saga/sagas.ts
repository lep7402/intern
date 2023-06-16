import { all } from "redux-saga/effects"
import { login, register,logout } from "./sagas/Authentication"

export default function* rootSaga() {
  yield all([ register(),login(),logout()])
}
