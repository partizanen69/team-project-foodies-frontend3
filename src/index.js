import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import { App } from 'components/App';
import './assets/sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider Provider store={store}>  
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
</React.StrictMode>
);
