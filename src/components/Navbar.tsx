import styled from "styled-components";
import ArrowDown from "./icons/ArrowDown";
import PhoneCall from "./icons/PhoneCall";

const StyledNavbar = styled.nav`
background-color: var(--green-gray-600);
color: black;
display: flex;
justify-content: space-between;
width: 100vw;
ul {
    display: flex;
    list-style-type: none;
    li {
        margin: 0 10px;
    }
}


`

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li><a href="#">Home</a><ArrowDown /></li>
        <li><a href="#">Shop</a><ArrowDown /></li>
        <li><a href="#">Pages</a><ArrowDown /></li>
        <li><a href="#">Blog</a><ArrowDown /></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div>
        <PhoneCall />
        <span>(219)555-0114</span>
      </div>
    </StyledNavbar>
  )
}

export default Navbar;  
