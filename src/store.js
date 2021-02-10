import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return { user: null };
  }

  if (action.type === 'LOGIN') {
    return { ...state, user: action.user };
  }

  if (action.type === 'LOGOUT') {
    return { ...state, user: null };
  }

  if (action.type === 'GET_RECENT') {
    return { ...state, recent: action.recent };
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
