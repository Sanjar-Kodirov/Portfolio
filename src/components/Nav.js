import React from 'react'
import styled from 'styled-components'
import {About} from '../styles'
const Navbar = () => {
    return (
        <Nav>
            <h1>Capture</h1>
            <ul>
                <li>Capture</li>
                <li>About us</li>
                <li>Our Work</li>
                <li>Contact us</li>
            </ul>
        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    padding: 1rem 10rem;
    align-items: center;
    justify-content: space-between;
    background: #282828;
    color: #fff;
    ul{
        li{
            padding-left: 10rem;
            display: inline-block;
            &:hover{
                transition: 0.5s easy;
                background:#fff;
                color: #333;   
                position: relative; 
            }
        }
    }
`

export default Navbar
