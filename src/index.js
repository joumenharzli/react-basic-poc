import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { PostContainer} from './modules/post/containers/post-container';

const App = () => (
  <MuiThemeProvider>

    <PostContainer></PostContainer>

  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
