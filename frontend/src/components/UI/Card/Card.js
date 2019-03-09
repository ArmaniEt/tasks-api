import React from 'react';
import {Col, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardText
} from 'reactstrap';

const TaskCard = (props) => {
    return (
        <Row>
            <Col sm="12">
                <Card className="mt-2">
                    <CardHeader className="text-center">{props.summary}</CardHeader>
                    <CardBody>
                        <CardText>{props.description}</CardText>
                        <NavLink to={props.link.url}>Просмотреть задачу</NavLink>
                    </CardBody>
                    <CardFooter>{props.date}</CardFooter>
                    <p className="text-center">Время выполнения: {props.time} ч.</p>
                </Card>
            </Col>
        </Row>
    );
};

export default TaskCard;