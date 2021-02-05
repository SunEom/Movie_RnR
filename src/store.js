import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return { user: { nick: 'suneom' } };
  }

  if (action.state === 'LOGIN') {
    return { ...state, user: action.user };
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
