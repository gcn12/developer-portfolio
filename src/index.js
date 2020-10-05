import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { IndexContainer } from './Index.styles.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <IndexContainer>
      
      <App/>
      {/* <Footer/> */}
    </IndexContainer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();