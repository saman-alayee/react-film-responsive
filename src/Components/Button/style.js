import styled from "styled-components";


export const Style = styled.div `
padding:8px;
.ant-btn{
    background-color:rgb(38, 38, 38);
    border-radius:15px;
    padding: 5px 62px;
    margin: 10px 0;
    height:45px;

    
}
.ant-flex-img{
    margin-top:20px;
}
.ant-flex-gap-large{
 gap:10px;
}
.ant.btn span{
    padding: 10px 0;
}
.over-flow{
    overflow:hidden;
    text-align:center;
}
.size-img{
    width: 75%;

}
@media (max-width: 768px) {
    .size-img{
        width: 100%;
    
    }
    .ant-btn{
        width: 48%
    
        
    }
  }
`


export default Style;