import styled from "styled-components"

export const Style = styled.div`
background-color:rgb(28, 28, 28);
/* position:fixed;
bottom:0 ;
left:0;
width:100%; */
p{
    padding:0;
    margin:0;
    font-size:16px;
}
color:white;
.container{
    width:1340px;
    margin:auto;
    padding:30px 0;
}
.flex{
    display:flex;
}
.justy-space{
 justify-content:space-between;
}
.size-img{
width:25px;
height:auto;
border-radius:20px;
}
.flex-dir-row{
 flex-direction:row
}
.flex-dir-column{
flex-direction:column;
}
.flex-wrap{
flex-wrap:wrap
}
.flex-nowrap{
    flex-wrap:nowrap;
}
.align-items-center{
align-items:center
}
.img-namad{
    width: 111px;
    height: auto;
    border-radius: 43px;
}
.gap-20{
    gap:20px;
}
.gap-15{
 gap:15px;
}
.gap-10{
    gap:10px
}
.button{
    border: 3.13px solid rgb(30, 30, 30);
        border-radius:25px;
        padding: 9px 38px;
        text-decoration:none;
        font-size:13px;
        font-weight:bold;
        line-height:10px;
        color:white;
}
.m-b-25{
margin-bottom:25px;
}
.dow-app{
    font-size:15px;
    color: rgb(168, 168, 168);
}
.bg-bazar{
    background-color:green;
}
.bg-myket{
    background-color:#1e90ff;
}
.bg-gogle{
    background-color:rgb(39, 39, 39);
}
.width{
  width:30%;
}
`

export default Style;