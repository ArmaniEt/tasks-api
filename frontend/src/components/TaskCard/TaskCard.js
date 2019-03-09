import React from 'react'
import Card from "../UI/Card/Card"


const TaskCard = props => {
    const {task} = props;

    const {summary, id, description, due_date, time_planned} = task;
    const link = {
        url: '/task/' + id
    };

    return <Card summary={summary} link={link} description={description} date={due_date} time={time_planned}/>
};


export default TaskCard;