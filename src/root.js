import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Home from './home/home';
import About from './about/about';
class Root extends React.Component {
	render() {
		return (
			<div>
				<h1>Root</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
			</div>
		)
	}
}

export default Root