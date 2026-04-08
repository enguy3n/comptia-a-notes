import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function HeaderNav(){
    return(
        <Navbar bg="dark" data-bs-theme="dark" id="navbar">
            <Nav className="me-auto">
                <Nav.Link href="/comptia-a-notes/">Home</Nav.Link>
                <NavDropdown title="Notes" id="notes-dropdown">
                    <NavDropdown.Item href="/comptia-a-notes/unit1/">Unit 1</NavDropdown.Item>
                    <NavDropdown.Item href="/comptia-a-notes/unit2/">Unit 2</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default HeaderNav;