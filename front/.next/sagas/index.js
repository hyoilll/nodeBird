import { all, fork, call, put, take } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // call은 동기 함수 호출이기 때문에 logInAPI함수에서 제대로 데이터를 받아올 때 까지 대기함 / fork는 비동기함수 호출이기 때문에 대기하지 않아서 call을 해주는 것
    const result = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data, // 데이터를 잘 받아오면 result.data에 저장됨
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data, // 데이터를 받아올 때 에러가 발생하면 err.response.data에 저장됨
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // call은 동기 함수 호출이기 때문에 logInAPI함수에서 제대로 데이터를 받아올 때 까지 대기함 / fork는 비동기함수 호출이기 때문에 대기하지 않아서 call을 해주는 것
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data, // 데이터를 잘 받아오면 result.data에 저장됨
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data, // 데이터를 받아올 때 에러가 발생하면 err.response.data에 저장됨
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    // call은 동기 함수 호출이기 때문에 logInAPI함수에서 제대로 데이터를 받아올 때 까지 대기함 / fork는 비동기함수 호출이기 때문에 대기하지 않아서 call을 해주는 것
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data, // 데이터를 잘 받아오면 result.data에 저장됨
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data, // 데이터를 받아올 때 에러가 발생하면 err.response.data에 저장됨
    });
  }
}

function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield take("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
