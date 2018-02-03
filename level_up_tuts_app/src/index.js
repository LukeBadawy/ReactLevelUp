import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import contacts from './data';


ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
registerServiceWorker();
