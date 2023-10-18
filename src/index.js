import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider, queryClient } from './queryClient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>

    <Provider store={store} >
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
        </Provider>
    </QueryClientProvider>
   );

