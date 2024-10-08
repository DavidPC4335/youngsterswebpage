import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';

ReactDOM.render(
    <Router>
      <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </React.StrictMode>
    </Router>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
