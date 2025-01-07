import styled from "styled-components";
import ArrowDown from "./icons/ArrowDown";
import PhoneCall from "./icons/PhoneCall";

const StyledNavbar = styled.nav`
background-color: var(--gray-800);
color: black;
display: flex;
align-items: center;
justify-content: space-around;
width: 100vw;

ul {
  display:flex;
  gap: 2rem;
  list-style: none;
}

a {
  display:flex;
  align-items:center;
  gap: 0.25rem;
  color: var(--gray-400);
  text-decoration: none;

  &:hover {
    color: var(--white);
  }
}

div {
  display: flex;
  align-items:center;
  gap: 0.5rem;
}

span {
  color: var(--white);
}
`

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li><a href="#">Home<ArrowDown /></a></li>
        <li><a href="#">Shop<ArrowDown /></a></li>
        <li><a href="#">Pages<ArrowDown /></a></li>
        <li><a href="#">Blog<ArrowDown /></a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div>
        <PhoneCall />
        <span>(219) 555-0114</span>
      </div>
    </StyledNavbar>
  )
}

export default Navbar;  
