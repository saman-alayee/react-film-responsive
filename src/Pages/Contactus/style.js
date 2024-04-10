import styled from "styled-components"

export const Style= styled.div`
background-color:rgb(25, 25, 25);
color:rgb(168, 168, 168);
margin-top: 160px;
overflow-x:hidden;
p{
    padding:0;
    margin:0
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  
  @media (max-width: 767px) {
    .sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0 30px;
    }
  }
  .input-form
  {
    width: 80%;
    margin-top: 1rem;
  }
  .button-container  {
    
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
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
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
.box-input{
    padding: 8px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    border-radius: 3px 3px 3px 3px;
}
.mr-10{
    margin-right:10px;
}
.mb-15{
    margin-bottom:15px;
}
.mb-40{
    margin-bottom:40px;
}
.mr-25{
    margin-right:25px;
}
.box-input-bg{
    width:300px;
    height:50px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    border-radius: 3px 3px 3px 3px;
}
.image-call{
    width:25px;
    height:auto;
}
.img{
  width: 529px;
}
.flex{
display:flex;
}
.flex-direction{
    flex-direction:column;
}
.width{
    width:100%;
}
@media (max-width: 767px) {

  .img{
      width: 300px;
  }
}
.gap-10{
    gap:10px;
}
.holder-box{
    background-color: #000000;
    color: rgb(168, 168, 168);
    border-radius:15px;
}
.text-center{
    text-align:center;
    align-items:center;
}
.padding-input{
    padding: 15px 65px;
}
.submit{
    width: 18%;
    padding: 10px 0px;
    background-color: green;
    margin-top: 20px;
    cursor: pointer;
}
`


export default Style;