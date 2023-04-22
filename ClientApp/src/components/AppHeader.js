import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import './StyleSheet.css'

export default class AppHeader extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <Nav className="mx-auto" >
                    <NavbarBrand>HR PLATFORM</NavbarBrand>
                        <NavItem>
                            <NavLink onClick={this.props.candidateClick} href="/" >Job Candidates</NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink onClick={this.props.skillClick} href="/">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">About</NavLink>
                    </NavItem>
                </Nav>
                </Navbar>
            </div>
        )
    }
}