import styled from "styled-components"
import Facebook from "./icons/Facebook"
import Twitter from "./icons/Twitter"
import Pinterest from "./icons/Pinterest"
import Instagram from "./icons/Instagram"

function Newsletter() {

  const StyledNewsletter = styled.section`
    display:flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    background-color: var(--gray-100);  
    color: var(--gray-400);

    >:first-child {
      width: 30%;
    }

    >:last-child{
      display:flex;
      gap: 1rem;
    }

    ul {
      display:flex;
      align-items: center;
      gap: 1rem;
      list-style: none;
    }

    li {
      /* background-color:blue; */
      max-height: 34px;
      padding: 0.5rem;
      border-radius: 50%;
    
      &:hover {
        background-color: var(--primary);
      }
    }

    button {
      background-color: var(--primary);
      color: var(--white);
      border: none;
      border-radius: 43px;
      padding: 1rem 2.5rem 1rem 2.5rem;
      font-weight: 600;
    }

    .visually-hidden {
      position: absolute; 
      width: 1px;
      height: 1px; 
      padding: 0; 
      margin: -1px; 
      overflow: hidden; 
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    h2 {
      color: var(--gray-900);
      font-weight: 600;
    }

    #email {
      padding: 1rem 5rem 1rem 1rem;
      margin-right: -2.5rem;
      border: 1px solid var(--gray-100);
      border-radius: 46px;
    }
  `

  return (
    <StyledNewsletter>
      <div>
        <h2>Subscribe our Newsletter</h2>
        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
      </div>
      <div>
        <form action="">
          <label htmlFor="email" className="visually-hidden">Your email address</label>
          <input id="email" type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
        <ul>
          <li><a href="#"><Facebook /></a></li>
          <li><a href="#"><Twitter /></a></li>
          <li><a href="#"><Pinterest /></a></li>
          <li><a href="#"><Instagram /></a></li>
        </ul>
      </div>
    </StyledNewsletter>
  )
}

export default Newsletter