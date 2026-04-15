import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type Props = {
    location: string,
    title: string,
}

function NavItem({location, title}: Props){
    const navigate = useNavigate();
    let destination: string = `/comptia-a-notes${location}`

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
                    <NavItem location="/unit1" title="Unit 1"/>
                    <NavItem location="/unit2" title="Unit 2" />
                    <NavItem location="/unit3" title="Unit 3" />
                    <NavItem location="/unit4" title="Unit 4" />
                    <NavItem location="/unit5" title="Unit 5" />
                    <NavItem location="/unit6" title="Unit 6" />
                    <NavItem location="/unit7" title="Unit 7" />
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default HeaderNav;