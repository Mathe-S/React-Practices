import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './components/store/reducer'



ReactDOM.render(<App appTitle = "Project Manager"/>, document.getElementById('root'));
registerServiceWorker();
