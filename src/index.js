import React from 'react';
import ReactDOM from 'react-dom';
import { hello , goodbye } from './lib'
import Root from './root'
import css from './stylesheets/style.css'
ReactDOM.render(
	<div>
	<Root/>
	</div>,
	document.getElementById('react-container')

)