import React from 'react';
import { render } from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import { PostContainer } from './modules/post/containers/post-container';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>

    <PostContainer></PostContainer>

  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
