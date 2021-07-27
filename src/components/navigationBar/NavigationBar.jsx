import logo from "../../images/appeel.png"
import styles from "./navigationBar.module.css"
import { Component } from "react";
import { MenuItems } from "./MenuItems"
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img width="110" height="35" className={"d-inline-block align-top"} src={logo} alt="Appeel logo" />{' '}
                        Assessment
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {MenuItems.map(item => {
                            return (
                                <LinkContainer exact to={item.url}>
                                    <Nav.Link key={item.title} className={styles.navlink}>{item.title}</Nav.Link>
                                </LinkContainer>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NavigationBar;