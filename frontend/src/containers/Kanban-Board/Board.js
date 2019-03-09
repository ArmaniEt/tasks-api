import React, {Component, Fragment} from 'react';
import {TASKS_URL} from "../../urls";
import {Col, Row} from 'reactstrap';
import TaskCard from '../../components/TaskCard/TaskCard';

class Board extends Component {
    componentDidMount() {
        fetch(TASKS_URL).then(response => {
            if (response.ok) return response.json();
            throw new Error("Something wrong with network request check it out")
        }).then(tasks => {
            let inProgressTask = [];
            let doneTask = [];
            let queueTask = [];
            tasks.map(task => {
                if (task.status === 'Queue') queueTask.push(task);
                if (task.status === 'In progress') inProgressTask.push(task);
                if (task.status === 'Done') doneTask.push(task);
            });
            this.setState({tasks_done: doneTask, tasks_queue: queueTask, tasks_in_progress: inProgressTask})
        }).catch(error => {
            console.log(error)
        })

    }


    state = {
        tasks_done: [],
        tasks_queue: [],
        tasks_in_progress: []
    };


    render() {
        return (
            <Fragment>
                <Row className="mt-3">
                    <Col xs={4}>
                        <h2 className="text-center">Очередь</h2>
                        {this.state.tasks_queue.map(task => <TaskCard
                            key={task.id}
                            task={task}

                        />)}
                    </Col>
                    <Col xs={4}>
                        <h2 className="text-center">В работе</h2>
                        {this.state.tasks_in_progress.map(task => <TaskCard
                            key={task.id}
                            task={task}

                        />)}
                    </Col>
                    <Col xs={4}>
                        <h2 className="text-center">Сделано</h2>
                        {this.state.tasks_done.map(task => <TaskCard
                            key={task.id}
                            task={task}
                        />)}
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Board;