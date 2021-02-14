import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers/index";

const configureStore = () => {
  // store = state + reducer
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;

// contextAPI vs Redux (비동기를 지원하기 쉽냐 어렵냐)

// contextAPI - 소규모 어플리케이션 (비동기의 과정 요청, 성공, 실패를 직접 다 구현해야함)
// Redux - 간단하기 때문에 에러를 잘 해결할 수 있음 / 코드량이 많아짐 (데이터가 커짐에 따라 리듀서를 사용하여 분리가능)
// mobx - 에러를 추격하기 힘들어 잘 해결할 수 없음 / 코드량이 적음
