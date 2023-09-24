import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png' alt="logo"/>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="#">My profile</a>
            </li>
            <li>
                <a href="#">Curriculum</a>
            </li>
            <li>
                <a href="#">Analytics</a>
            </li>
        </ul>
      </div>
      <a href="#"><Button text="Logout" /></a>
      
    </Nav>
  )
}

const Nav=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
margin:0.2rem;
.brand{
    margin-left:4rem;
    mrgin-top:3rem;
    height:5rem;
}
.toggle{
    display:none;
}
.links{
    height:4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    clip-path:polygon(0 0,100% 0,80% 100%,20% 100%);
    padding:2.5rem 8rem; 
}
ul{
    display:flex;
    list-style-type:none;
    gap:3rem;
    li{
        a{
            color:#002000;
            text-decoration:none;
            tansition:0.4s ease-in-out;
            &:hover{
                color:#2d69fd;
            }
        }
    }
}
Button{
    margin-right:5rem;
}
`;
