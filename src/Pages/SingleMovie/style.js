import styled from "styled-components"

export const Style= styled.div`
margin:160px 0; 
color:white;
p , a , span{
    color:white;
}
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
@media (max-width: 767px) {
  .sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0px 30px ;
  }
  .img{
      width: 329px;
      height: 359px;
      border-radius:0px;
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
.details{
    margin-left:20px;
    width:60%;
    color: rgb(212, 212, 212);
}
.poster-size{

  width:100%;
  
}
.holder-movie{
display:flex;
justify-content:space-between;
gap:10px;
align-items:center; 
}


.gallery{
    display:flex;
    flex-direction:row;
    gap:10px;
}

.img-gallery{
    width:30%;
    height:auto;
}
.movei-name{
    color:blue;
    font-size:40px;
}
.mt-20{
    margin-top:20px;
}

 
`

export default Style;