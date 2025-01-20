import styled from "styled-components"
import * as images from "../assets/images"
import Brand1 from "./icons/Brand1"
import Brand2 from "./icons/Brand2"
import Brand3 from "./icons/Brand3"
import Brand4 from "./icons/Brand4"
import Brand5 from "./icons/Brand5"
import Brand6 from "./icons/Brand6"


function FollowUs() {

  const StyledFollowUs = styled.section`
      background-color: var(--gray-50);
      text-align: center;
      padding: 3.75rem 4rem 3.75rem 4rem;

      .brand-logo-container {
        display: flex;
        justify-content: space-between;
      }

      h2 {
        font-weight: 600;
        margin: 3.75rem 0 2rem 0;
      }

      .instagram-post {
        width: 12.5rem;
        height: 12.5rem;
        border-radius: 10px;
        margin-right: 1.5rem;
      }
     `
  return (
    <StyledFollowUs>
      <div className="brand-logo-container">
        <Brand1 />
        <Brand2 />
        <Brand3 />
        <Brand4 />
        <Brand5 />
        <Brand6 />
      </div>
      <h2>Follow us on Instagram</h2>
      <div >
        <img className="instagram-post" src={images.instagramPost1} alt="vegetables" />
        <img className="instagram-post" src={images.instagramPost2} alt="vegetables" />
        <img className="instagram-post" src={images.instagramPost3} alt="vegetables" />
        <img className="instagram-post" src={images.instagramPost4} alt="vegetables" />
        <img className="instagram-post" src={images.instagramPost5} alt="vegetables" />
        <img className="instagram-post" src={images.instagramPost6} alt="vegetables" />
      </div>
    </StyledFollowUs>
  )
}

export default FollowUs