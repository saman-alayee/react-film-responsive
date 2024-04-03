import styled from "styled-components";

export const Style= styled.div`
margin-top: 120px;
input{
    color: rgb(241, 241, 241);
    background: rgb(53, 53, 53);
    border: 1px solid rgb(53, 53, 53);
    border-radius: 10px;
    width:50%;
    padding:10px;
}
h2{
  color:white;
  display:inline ;
  padding:10px 30px;
  margin-left:30px;
  margin-bottom:30px;

}
ul.list{
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
    


`;

export default Style;