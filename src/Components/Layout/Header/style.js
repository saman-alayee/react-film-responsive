import styled from "styled-components"

export const Style = styled.div`
display:flex;
align-items:center;
background-color:black;
border-radius:17px;
margin:8px;
.logo{
 width:61px;
 height:auto;
 margin-left:12px;
 margin-right:15px;
}
.menu{
 ul{
    display:flex;
    gap:13px;
    padding:0;
    li{
        list-style:none ;
        border: 3.13px solid rgb(30, 30, 30);
        border-radius:15px;
        padding: 5px;
        a{
          padding: 8px 12px;
          text-decoration:none;
          color:rgb(110, 110, 110);
          font-size:20px;
          line-height:10px;
          &:hover{
            color:white;
          }
        }
    }
 }
}
.holder-menu{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
}
.search-button{
    background-color:rgb(30, 30, 30);
    font-size:26px;
    color:white;
    margin-right:25px;
    border: 3.13px solid rgb(30, 30, 30);
    padding: 4px 9px;
    border-radius:15px;
    line-height:10px;
    &:hover{
        color:blue;
    }
}
`

export default Style;