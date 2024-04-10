import styled from "styled-components";

export const Style = styled.div`
  background-color: rgb(28, 28, 28);
  margin: auto;
  overflow-x: hidden;
  padding: 50px 0;
  p {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
  .fixed {
    position: fixed;
    bottom: 0;

    z-index: 2;
    width: 100%;
  }
  color: white;
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
      padding: 0px 20px;
    }
  }
  @media (max-width: 767px) {
    .sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 15px 30px;
    }
    .border-line-right {
      border-right: none;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
    .col-lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .flex {
    display: flex;
  }
  .justy-space {
    justify-content: space-between;
  }
  .size-img {
    width: 25px;
    height: auto;
    border-radius: 20px;
  }
  .flex-dir-row {
    flex-direction: row;
  }
  .flex-dir-column {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .align-items-center {
    align-items: center;
  }
  .img-namad {
    width: 111px;
    height: auto;
    border-radius: 43px;
  }
  .gap-20 {
    gap: 20px;
  }
  .gap-15 {
    gap: 15px;
  }
  .gap-10 {
    gap: 10px;
  }
  .button {
    border: 3.13px solid rgb(30, 30, 30);
    border-radius: 25px;
    padding: 9px 6px;
    text-decoration: none;
    font-size: 13px;
    font-weight: bold;
    line-height: 10px;
    color: white;
    display: flex;
    justify-content: center;
    width: 12rem;
  }
  .m-b-25 {
    margin-bottom: 25px;
  }
  .m-l-20 {
    margin-left: 20px;
  }
  .dow-app {
    font-size: 15px;
    color: rgb(168, 168, 168);
  }
  .bg-bazar {
    background-color: green;
  }
  .bg-myket {
    background-color: #1e90ff;
  }
  .bg-gogle {
    background-color: rgb(39, 39, 39);
  }

  .border-line-right {
    padding-right: 100px;
    border-right: 3px solid rgb(39, 39, 39);
  }
  .border-icons {
    border: 1px solid white;
    background: rgb(53, 53, 53);
    border-radius: 50%;
    padding: 5px;
  }
`;

export default Style;
