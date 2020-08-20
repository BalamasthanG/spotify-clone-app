export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //"BQClYAIj_RcCDvd63Z-e8PQECFpccAeHQY1J7n4F9XRKNzuBfnrJ1WNiT4isoBMR9Kyow_PQia8-vBHzSyhw0nEWQXrEHuLcHi6EuTyfJSaAoDXoMipct8BjXjfY01Si3RMdBT14zVxSYsghwyuB1SyYuN4GyQ1Wi98CbbPMbTpeZ6BS",
  discover_weekly: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
