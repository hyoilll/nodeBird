export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "hyoil",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://placeimg.com/64/64/1",
        },
        { src: "https://placeimg.com/64/64/2" },
        { src: "https://placeimg.com/64/64/3" },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 한정판!",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "사고싶음",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "dumyData",
  User: {
    id: 1,
    nickname: "zerocho",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
