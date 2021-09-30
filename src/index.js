import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import ShopProvider from './context/ShopContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ShopProvider>
    <App />
    </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

