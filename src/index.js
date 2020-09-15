import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../materialui/theme.js'

ReactDOM.render(
  <>
    <MuiThemeProvider theme={theme}>  {/* 追加 */}
      <App />
    </MuiThemeProvider>  {/* 追加 */}
  </>,
  document.getElementById('root')
);
