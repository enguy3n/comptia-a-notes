import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type Props = {
    location: string,
    title: string,
}

function NavItem({location, title}: Props){
    const navigate = useNavigate();
    let destination:string = `/comptia-a-notes/${location}`

    console.log("nav item function activated:"+destination);

    const handleClick = () => {
        navigate(destination);
    };
    return(
        <>
            <NavDropdown.Item onClick={handleClick}>{title}</NavDropdown.Item>
        </>
    )
}

function HeaderNav(){
    return(
        <Navbar bg="dark" data-bs-theme="dark" id="navbar">
            <Nav className="me-auto">
                <Nav.Link href="/comptia-a-notes/">Home</Nav.Link>
                <NavDropdown title="Notes" id="notes-dropdown">
                    <NavItem location="unit1" title="Unit 1"/>
                    <NavItem location="unit2" title="unit2" />
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default HeaderNav;