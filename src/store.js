import { createStore } from "redux";

const initialState = {
  page: 1,
  name: "",
  age: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

// redux store
const store = createStore(reducer);

export default store;
