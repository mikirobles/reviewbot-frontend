import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import ReviewsProvider from './store/context';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ReviewsProvider>
        <App />
      </ReviewsProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
