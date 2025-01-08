import styled from "styled-components"
import Logo from "./icons/Logo"
import MethodApplePay from "./icons/MethodApplePay"
import MethodVisa from "./icons/MethodVisa"
import MethodDiscover from "./icons/MethodDiscover"
import MethodMastercard from "./icons/MethodMastercard"
import MethodSecurePayment from "./icons/MethodSecurePayment"

function Footer() {
  const StyledFooter = styled.footer`
  padding: 3.75rem 4rem 0 4rem;
  background-color: var(--gray-900);
  color: var(--gray-500);

  >:first-child {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 4rem;
    padding-bottom: 2rem;
  }
  >:last-child {
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  >:last-child p {
   
    padding: 1.875rem 0 1.875rem 0;
  }

  >:last-child ul {
    display:flex;
    gap: 0.5rem;
  }

  div>span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  div>a {
    padding-bottom: 5px;
    color: var(--white);
    border-bottom: 2px solid var(--primary);
  }
  
  h2{
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--white);
  }

  h2+p {
    margin-bottom: 1rem;
  }
  
  h2+span {
    background-color:red;
  }

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 500;
    color: var(--white);
  }

  ul {
    padding: 0;
  }

  li {
    margin-bottom: 0.75rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--gray-500);

    &:hover {
      color: var(--white);
    }
  }

  .horizontalBar {
    border: 1px solid var(--gray-800);
  }
  `
  return (
    <StyledFooter>
      <div>
        <div>
          <h2><Logo /> Ecobazar</h2>
          <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
          <a href="#">(219) 555-0144</a>
          <span>Or</span>
          <a href="#">Proxy@gmail.com</a>
        </div>
        <div>
          <h3>My Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Shopping Cart</a></li>
            <li><a href="#">Wishlist</a></li>
          </ul>
        </div>
        <div>
          <h3>Helps</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Faqs</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3>Proxy</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
        <div>
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Fruit & Vegetables</a></li>
            <li><a href="#">Meat & Fish</a></li>
            <li><a href="#">Bread & Bakery</a></li>
            <li><a href="#">Beauty & Health</a></li>
          </ul>
        </div>
      </div>
      <div className="horizontalBar"></div>
      <div>
        <p>Ecobazar eCommerce &#169; 2025. All Rights Reserved</p>
        <ul>
          <li><MethodApplePay /></li>
          <li><MethodVisa /></li>
          <li><MethodDiscover /></li>
          <li><MethodMastercard /></li>
          <li><MethodSecurePayment /></li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer