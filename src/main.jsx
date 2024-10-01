import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/ticket/ticketReducer.js';
import App from './App.jsx'
import './index.css'


const store = createStore(rootReducer, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <StrictMode>
    <App />
  </StrictMode>
  </Provider>,
  
)
