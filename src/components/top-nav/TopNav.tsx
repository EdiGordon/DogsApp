import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { SiDatadog } from 'react-icons/si';

// import { useState } from "react";
// import { useAppSelector } from "../../app/hooks";
// const { dogs, error, loading } = useAppSelector((state) => state.news);
// let filteredDogs = dogs.filter((a) => a.is_visible)
// const [search, setSearch] = useState("");


const TopNav = () => {
    function setSearch(value: string) {
        throw new Error('Function not implemented.');
    }

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    <span className="text-muted"
                    >Dogs App</span>
                    &nbsp;
                    <SiDatadog />
                    {/* <img src={logo} alt="React Logo" width={50} />  */}
                </NavLink>
                {/* Burger: */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Links */}
                        <NavLink className='nav-link' to="/news">Breeds</NavLink>
                        <NavLink className='nav-link' to="/about">About</NavLink>
                        <NavLink className='nav-link' to="/favorites">Favorites</NavLink>
                    </Nav>
                    {/* <input id="search" value={search !== "" ? search : ""}
                        onChange={(e) => {
                            setSearch(e.currentTarget.value);
                        }}
                        placeholder="search"
                    />
                    <button
                        className="btn btn-primary w-100"
                        onClick={() => {
                            filteredDogs = dogs.filter((a) => a.name.includes(search));
                            // console.log(filteredDogs);
                        }}
                    >
                        Search
                    </button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;