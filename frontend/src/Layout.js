import React from 'react'
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div className='container'>
                <Nav className="bg-secondary p-2">
                    <NavItem className="p-2">
                        <NavLink to="/">На главную</NavLink>
                    </NavItem>
                    <NavItem className="p-2">
                        <NavLink to="/add_task/">Добавить задачу</NavLink>
                    </NavItem>
                </Nav>
                {this.props.children}
            </div>
        );
    }
}
