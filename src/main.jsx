import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
const { VITE_YOUR_CLIENT_ID } = import.meta.env

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          'client-id': VITE_YOUR_CLIENT_ID
        }}
      >
        <App />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>,
)
