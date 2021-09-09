import React, { useState } from 'react'
import {Logo,Hamburger,Menu,Nav, MenuLink} from'./NavbarStyles'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo to = "/">
                <i>{"<Clarusway>"}</i> <span>recipe</span>
            </Logo>
            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>

            </Hamburger>
            <Menu isOpen = {isOpen}>
                <MenuLink to= "/about">About</MenuLink>
                <MenuLink to= {{pathname: "https://github.com/sofiadurkan1"}} target="_blank" rel="noopener noreferrer">Github</MenuLink>
                <MenuLink to= "/login">Logout</MenuLink>


            </Menu>
        </Nav>
    )
}

export default Navbar
