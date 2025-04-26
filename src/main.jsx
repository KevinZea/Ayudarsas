// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS para animaciones al hacer scroll
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: false,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);