import styled from "styled-components";

export const Style = styled.div`
  margin: 50px 0;
  h2 {
    color: white;
    display: inline;
    padding: 10px 30px;
    margin-left: 30px;
    &:hover {
      background-color: blue;
      border-radius: 5px;
    }
  }
  ul {
    display:grid;
    justify-content:center;
    gap:3px;
    grid-template-columns: repeat(7 , 1fr);
    padding:0;
    
    margin-top: 4rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(7, 1fr); /* Change to 4 columns for medium screens */
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr); /* Change to 2 columns for small screens */
    }
    li {
      width: 90%;
      margin: 0 auto;
      a {
        color: rgb(212, 212, 212);
        text-align: center;
        font-size: 15px;
        img {
          width: 100%;
          aspect-ratio: 3/5;
          border-radius: 15px;
        }
        h3 {
          height: 50px;
        }
      }
    }
  }
  .navigation-buttons {
    position: absolute;
    transform: translateY(35%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px; /* Adjust spacing */
    z-index: 1;
  }
  .navigation-buttons button {

  }
  .navigation-buttons button {
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
 
}
  .holder-img {
    position: relative;
  }

  .list li .holder-img .dark-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 15px;
  }
  .list li:hover .holder-img .dark-overlay {
    opacity: 1;
  }
`;

export default Style;
