import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react'
import { ChakraProvider } from '@chakra-ui/react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_FRONTEND_API
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode> 
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ClerkProvider>  
  </React.StrictMode>
);

reportWebVitals();
