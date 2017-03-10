import Reactotron, { trackGlobalErrors, openInEditor } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure()
  .use(openInEditor())
  .use(trackGlobalErrors({
    veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
  }))
  .use(reactotronRedux());

if (__DEV__) {
  Reactotron
    .connect();
}

export default Reactotron;
