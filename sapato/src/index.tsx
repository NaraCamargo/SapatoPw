import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Modelos from '../src/pages/Modelos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

 root.render(
	<React.StrictMode>
	  <Modelos/>
	</React.StrictMode>
);