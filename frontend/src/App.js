import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Board from './containers/Kanban-Board/Board';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Board}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
