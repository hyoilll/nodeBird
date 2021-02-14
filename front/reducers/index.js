import { HYDRATE } from "next-redux-wrapper";
import { defaultHead } from "next/head";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

// action creator
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data: data,
  };
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// changeNickname("leehyoil");
// {
//     type:"CHANGE_NICKNAME",
//     data:"leehyoil"
// }

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      // 맨 처음 reducer 초기화시 default값이 없으면 return undefined가 되기 때문에 적어줌
      return state;
  }
};

export default rootReducer;
