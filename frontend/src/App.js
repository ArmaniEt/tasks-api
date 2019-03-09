import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Board from './containers/Kanban-Board/Board';
import './App.css';
import Layout from './Layout';
import ViewTask from './containers/ViewTask/ViewTask'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/task/:id" component={ViewTask}/>
                        <Route path="/" component={Board}/>
                    </Switch>
                </Layout>
            </BrowserRouter>


        );
    }
}

export default App;
