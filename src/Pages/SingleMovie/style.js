import styled from "styled-components"

export const Style= styled.div`
margin:160px 0; 
color:white;
p , a , span{
    color:white;
}
.container{
    width:90%;
    margin:0px auto;
}
.detailes{
    margin-left:20px;
    width:60%;
    color: rgb(212, 212, 212);
}
.holder-movie{
display:flex;
justify-content:space-between;
gap:10px;
align-items:center; 
}

.poster{
    width:30%;
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
@media (max-width:1490px){
.container{
  width:60%;
}
  
  .poster{
    width:30%;
  }
  .detailes{
    width:40%;
    margin-left:10px;
  }
  .img-gallery{
    width:20%;
  }
}
 
`

export default Style;