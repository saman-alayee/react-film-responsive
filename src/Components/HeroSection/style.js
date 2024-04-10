import styled from "styled-components";

export const Style = styled.div`
  max-width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-top: 85px;
 
  .hero-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
      "img1 img3 img4 img4 img4 img5"
      "img1 img3 img4 img4 img4 img5"
      "img2 img3 img4 img4 img4 img5"
      "img2 img3 img4 img4 img4 img5";
    gap: 10px;

    .hero-img1 {
      grid-area: img1;
    }
    .hero-img2 {
      grid-area: img2;
    }
    .hero-img3 {
      grid-area: img3;
    }
    .hero-img4 {
      grid-area: img4;
    }
    .hero-img5 {
      grid-area: img5;
    }
    .hero-img {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 760px) {
    .hero-container {
      grid-template-areas:
        "img1 img3"
        "img4 img4"
        "img5 img2"
        "img5 img2";
    }
  }
  @media (max-width: 768px) {
    height: 190vh;
    margin-top: 135px;
  }
`;

export default Style;
