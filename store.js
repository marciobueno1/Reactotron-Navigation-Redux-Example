// import { createStore } from 'redux';
import Reactotron from './ReactotronConfig';

import reducer from './reducers';

// const store = createStore(reducer, {});
const store = Reactotron.createStore(reducer, {}, sorry => sorry);

export default store;
