import logo from "../../images/appeel.png"
import styles from "./navigationBar.module.css"
import { MenuItems } from "./MenuItems"
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className={styles.navBrand}>
                        <img width="110" height="35" className={"d-inline-block align-top"} src={logo} alt="Appeel logo" />{' '}
                        Assessment
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {MenuItems.map((item, index) => {
                            return (
                                <LinkContainer key={index} exact to={item.url}>
                                    <Nav.Link key={index} className={styles.navlink}>{item.title}</Nav.Link>
                                </LinkContainer>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavigationBar;