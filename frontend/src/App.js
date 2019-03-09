import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Board from './containers/Kanban-Board/Board';
import './App.css';
import Layout from './Layout';
import ViewTask from './containers/ViewTask/ViewTask'
import AddTask from './containers/AddTask/AddTask'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/task/:id" component={ViewTask}/>
                        <Route path="/add_task/" component={AddTask}/>
                        <Route path="/" component={Board}/>
                    </Switch>
                </Layout>
            </BrowserRouter>


        );
    }
}

export default App;
