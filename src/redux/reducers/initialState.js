export const initialState = {
  articles: [],
  profile: {},
  isloggedin: false,
  isloggedout: false,
  token: localStorage.token || null,
  email: "",
  passwords: {},
  reactions: [],
  hasliked: false,
  hasdisliked: false,
  likeNum: 0,
  dislikeNum: 0,
  story: "",
  Rating: {},
  body: {},
  comments: []
};
