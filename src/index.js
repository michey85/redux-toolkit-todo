import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'

import store from './store';
import './index.css';
import App from './App';

import 'overlayscrollbars/css/OverlayScrollbars.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
