import React, {Component} from 'react';
import {TASKS_URL} from "../../urls";
import {NavLink} from 'react-router-dom'

class TaskView extends Component{
    state = {
        task: null
    };

    componentDidMount(){
        const match = this.props.match;

        fetch(TASKS_URL + match.params.id).then(response => {
            if (response.ok) return response.json();
            throw new Error("Something wrong with your network request")
        }).then(task => {
            this.setState({task: task})

        }).catch(error => console.log(error))
    }

    render(){
        if (!this.state.task) return null;
        const {summary, description, due_date, status, time_planned} = this.state.task;
        let d = new Date(due_date);
        let localDateTime = d.toLocaleString();

        return(
            <div className="container">
                <h4 className="text-center mt-2">Статус задачи: {status}</h4>
                <h3>Задача: {summary}</h3>
                <p>Сделать до: {localDateTime}</p>
                <p>Время выполнения: {time_planned}</p>
                {description ? <p className="text-center">{description}</p>: null}

            </div>

        )
    }
}

export default TaskView;