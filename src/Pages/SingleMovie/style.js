import styled from "styled-components"

export const Style= styled.div`
color:white;
p , a , span{
    color:white;
}
h1 , h2 , h3 , h4 , h5 , h6{
    color: rgb(246, 199, 0);
}
.container{
    width:900px;
    margin:50px auto;
}
.holder-movie{
display:flex;
justify-content:space-between;
gap:10px;
align-items:center; 
}
.poster-size{
    width:200px;
    height:auto;
}
`

export default Style;