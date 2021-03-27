import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux"; // 리듀서(함수)를 합쳐줌

import user from "./user";
import post from "./post";

// action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data: data,
//   };
// };

// changeNickname("leehyoil");
// {
//     type:"CHANGE_NICKNAME",
//     data:"leehyoil"
// }

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: //redux 서버사이드렌더링을 위함
        return { ...state, ...action.payload };
      default:
        // 맨 처음 reducer 초기화시 default값이 없으면 return undefined가 되기 때문에 적어줌
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
