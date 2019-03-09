import React, {Component} from 'react';
import {TASKS_URL} from "../../urls";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import axios from 'axios';

const OPTIONS = [
    {value: "Queue", label: 'Очередь'},
    {value: "In progress", label: 'В работе'},
    {value: "Done", label: 'Сделано'}
];


class TaskAdd extends Component {
    state = {
        task: {
            summary: "",
            description: "",
            due_date: "",
            time_planned: "",
            status: ""
        },

        alert: null,
        submitDisabled: false
    };


    updateTaskState = (fieldName, value) => {
        this.setState(prevState => {
            let newState = {...prevState};
            let task = {...prevState.task};
            task[fieldName] = value;
            newState.task = task;
            return newState;
        });
    };

    inputChanged = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        this.updateTaskState(fieldName, value);
    };


    dateChanged = (field, date) => {
        this.updateTaskState(field, date.toISOString());
    };


    formSubmitted = (event) => {
        event.preventDefault();

        this.setState(prevState => {
            let newState = {...prevState};
            newState.submitDisabled = true;
            return newState;
        });

        console.log(this.state.task);
        axios.post(TASKS_URL, this.state.task)
            .then(response => {
                console.log(response.data);
                if (response.status === 201) return response.data;
                throw new Error('Task was not created');
            })

            .then(task => this.props.history.replace('/task/' + task.id))
            .catch(error => {
                console.log(error);
                this.setState(prevState => {
                    let newState = {...prevState};
                    newState.alert = {type: 'danger', message: "Task was not added!"};
                    newState.submitDisabled = false;
                    return newState;
                });
            });
    };

    render() {
        const {summary, description, due_date, time_planned, status} = this.state.task;

        let alert = null;
        if (this.state.alert) {
            alert = <div className={"alert alert-" + this.state.alert.type}>{this.state.alert.message}</div>
        }


        const due_date_selected = due_date ? new Date(due_date) : null;
        return <div className="mt-3">
            {alert}
            <form onSubmit={this.formSubmitted}>
                <div className="form-group">
                    <label className="font-weight-bold">Название</label>
                    <input type="text" className="form-control" name="summary" value={summary}
                           onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label>Описание</label>
                    <input type="text" className="form-control" name="description" value={description}
                           onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Дэдлайн задачи</label>
                    <div>
                        <DatePicker dateFormat="yyyy-MM-dd" selected={due_date_selected} className="form-control"
                                    name="due_date" onChange={(date) => this.dateChanged('due_date', date)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Время для выполнения</label>
                    <div>
                        <input type="number" className="form-control"
                               name="time_planned" value={time_planned} onChange={this.inputChanged}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Статус</label>
                    <div>
                        <Select
                            name="status"
                            onChange={(value) => this.updateTaskState('status', value.value)}
                            options={OPTIONS.filter(option => option.label === "Очередь")}
                        />
                    </div>
                </div>
                <button disabled={this.state.submitDisabled} type="submit"
                        className="btn btn-primary">Сохранить
                </button>
            </form>
        </div>;
    }
}


export default TaskAdd;