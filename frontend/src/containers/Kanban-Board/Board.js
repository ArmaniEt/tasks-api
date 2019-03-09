import React, {Component, Fragment} from 'react';
import {TASKS_URL} from "../../urls";

class Board extends Component {
    componentDidMount(){
        fetch(TASKS_URL).then(response => {
            if(response.ok) return response.json();
            throw new Error("Something wrong with network request check it out")
        }).then(tasks => {
            const TASKS_IN_QUEUE = tasks.map(task => {
                if (task.status === 'Queue') return {...task}
            });
            const TASKS_DONE = tasks.map(task => {
                if (task.status === 'Done') return {...task}
            });

            const TASKS_IN_PROGRESS = tasks.map(task => {
                if (task.status === 'In progress') return {...task}
            });
            this.setState({tasks_done: TASKS_DONE, tasks_queue: TASKS_IN_QUEUE, tasks_in_progress: TASKS_IN_PROGRESS})
        }).catch(error => {console.log(error)})

    }




    state = {
        tasks_done: [],
        tasks_queue: [],
        tasks_in_progress: []
    };


    render() {
        return(
            <Fragment>

            </Fragment>
        )
    }
}

export default Board;