import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SiDatadog } from 'react-icons/si';
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { MDBBtn} from 'mdb-react-ui-kit';


const TopNav = () => {

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    <span className="text-muted"
                    >Dogs App</span>
                    &nbsp;
                    <SiDatadog />

                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink className='nav-link' to="/news">Breeds</NavLink>
                        <NavLink className='nav-link' to="/about">About</NavLink>
                        <NavLink className='nav-link' to="/favorites">Favorites</NavLink>
                    </Nav>
                    <>
                        <MDBBtn className='m-1 rounded-5' style={{ backgroundColor: '#3b5998' }} href='https://www.facebook.com/AmericanKennelClub/'>
                            <TiSocialFacebook />
                        </MDBBtn>

                        <MDBBtn className='m-1 rounded-5' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/akcdoglovers'>
                            <TiSocialTwitter />
                        </MDBBtn>
                        <MDBBtn className='m-1 rounded-5' style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/americankennelclub/'>
                            <SlSocialInstagram  />
                        </MDBBtn>

                        <MDBBtn className='m-1 rounded-5' style={{ backgroundColor: '#ed302f' }} href='https://www.youtube.com/user/AmericanKennelClub'>
                            <TiSocialYoutube />
                        </MDBBtn>
                    </>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;