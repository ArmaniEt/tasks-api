import React from 'react'
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div className='container'>
                <Nav className="bg-secondary">
                    <NavItem className="p-2">
                        <NavLink to="/">На главную</NavLink>
                    </NavItem>
                </Nav>
                {this.props.children}
            </div>
        );
    }
}
