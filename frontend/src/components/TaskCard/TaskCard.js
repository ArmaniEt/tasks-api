import React from 'react'
import Card from "../UI/Card/Card"


const TaskCard = props => {
    const {task} = props;

    const {summary, id, description, due_date, time_planned} = task;
    let d = new Date(due_date);
    let localDateTime = d.toLocaleString();
    const link = {
        url: '/task/' + id
    };

    return <Card summary={summary} link={link} description={description.substring(0,50) + "..."}
                 date={localDateTime} time={time_planned}/>
};


export default TaskCard;