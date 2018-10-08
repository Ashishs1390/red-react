import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router-dom';

import TodoComponent from '../todocomponents/todocomponent';

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>Home</h1>
                <TodoComponent/>
            </div>

        )
    }
}

export default Home;