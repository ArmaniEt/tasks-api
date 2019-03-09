import React from 'react';
import {Col, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardText
} from 'reactstrap';

const TaskCard = (props) => {
    return (
        <Row>
            <Col sm="12">
                <Card>
                    <CardHeader className="text-center">{props.title}</CardHeader>
                    <CardBody>
                        <CardText>{props.text}</CardText>
                        <NavLink to="/task">Просмотреть задачу</NavLink>
                    </CardBody>
                    <CardFooter>{props.date}</CardFooter>
                    <p className="text-center">Время выполнения: {props.time} ч.</p>
                </Card>
            </Col>
        </Row>
    );
};

export default TaskCard;