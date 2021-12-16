import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';
import { getMovies, searchMovies, setLoader } from "../../redux/actions/action";

 import Styles from "./styles.module.css"

const NavbarComponent = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [activePage, setActivePage] = useState("")

    useEffect(() => {
      setActivePage(window.location.pathname)
    }, [window.location])

    useEffect(() => {
      if(searchTerm !== "") {
        dispatch(setLoader(true))
        dispatch(searchMovies(searchTerm))
      } else {
        dispatch(setLoader(true))
        dispatch(getMovies('sort_by=popularity.desc'))
      }
    }, [searchTerm])



    return (
        <div>
          <Navbar color="light" light expand="md" style={{position: "fixed", width: "100%"}}>
            <NavbarBrand href="/">Movie Library</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <input type="text" placeholder="Search" className={Styles.searchbar} onChange={(e) => setSearchTerm(e.target.value)}/>
                <NavItem>
                  <NavLink href="/movies" active={activePage === "/movies" ? true : false}>Movies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/favorites" active={activePage === "/favorites" ? true : false}>Favorites</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
          </div>
    )
}

export default NavbarComponent