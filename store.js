import { createStore } from 'redux';
// import Reactotron from './ReactotronConfig';

import reducer from './reducers';

// const store = createStore(reducer, {});
const store = createStore(reducer, {}, sorry => sorry);

export default store;
