import styled from "styled-components";

export const Style = styled.div`
h2{
  color:red;
}
ul{
    display:flex;
    gap:6px;
    flex-wrap:wrap;
    li{
        width:200px;
        a{
           color:rgb(212, 212, 212);
           text-align:center ;
           font-size:15px;
            img{
                width:170px;
                height:255px;
                border-radius:15px;
                &:hover{
                    
                }
            }
            h3{
                 height:50px;
                }
        }
    }
}
`

export default Style;