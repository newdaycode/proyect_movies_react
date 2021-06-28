import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

//un componente retorna un elemnto de JSX, siempre deben comenzar con mayusculas porque los que estan en minusculas son reservados para los componente nativos

ReactDOM.render(

	<App/>,
  document.getElementById('root')
);

