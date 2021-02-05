import { createStore } from 'redux';

export default () =>
  createStore((state, action) => {
    if (state === undefined) {
      return { user: null };
    }
  }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
