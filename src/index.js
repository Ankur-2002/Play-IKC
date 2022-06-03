import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import { AuthContextProvider } from 'context/auth/AuthContext';
import './index.css';
import { Provider } from 'react-redux';
import store from 'store/store';

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthContextProvider>
  </Provider>,
  document.getElementById('root')
);
