import styled from "styled-components"

export const Style= styled.div`
background-color:rgb(25, 25, 25);
color:rgb(168, 168, 168);
margin-bottom:80px;
margin-top:160px;
overflow-x:hidden;
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
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
p{
    font-size:17px;
    line-height:30px;
}
.bold{
    font-weight:bold;
    font-size:20px;
}
.paddig-tb{
    padding:20px 5px;
}
.flex{
    display:flex;
    align-items: center;
    gap: 50px;
}
.img{
    width: 300px;
    height: 359px;
    border-radius: 15px 0px 0px 15px;
}
.holder-box{
    background-color: #000000;
    color: rgb(168, 168, 168);
    border-radius:15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
}
.mtb-25{
    margin:25px 0;
}
  
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 15px;
  }
  
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
    padding: 0 75px;
  }
  @media (max-width: 767px) {
    .sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
      
    }
    .img{
        width: 329px;
        height: 359px;
        border-radius:0px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      padding-left: 9rem;
      max-width: 85%;
      }
      .col-md-12 {
        flex: 0 0 100%;
        max-width: 100%;
      }
  }
  
`


export default Style;