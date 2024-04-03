import styled from "styled-components"

export const Style= styled.div`
margin: 130px 0;
h2{
  color:white;
  display:inline ;
  padding:10px 30px;
  margin-left:30px;
  margin-bottom:30px;
  &:hover{
    background-color:blue;
    border-radius:5px;
  }
}
ul.list{
    display:grid;
    gap:3px;
    grid-template-columns:repeat(7 , 1fr);

    li{
        width:90%;
        a{
           color:rgb(212, 212, 212);
           text-align:center ;
           font-size:15px;
            img{
                width:100%;
                aspect-ratio:3/5;
                border-radius:15px;
            }
            h3{
                 height:50px;
                }
        }
    }

}
.holder-img {
  position: relative;
}

.list li .holder-img .dark-overlay {
  position: absolute;
  inset:0;
  width:100%;
  max-height:100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0; 
  transition: opacity 0.3s; 
  border-radius:15px;
}

.list li:hover .dark-overlay {
  opacity: 1; 
}

.ant-pagination{
    text-align:center;
    font-size:17px;
}
.ant-pagination-item a{
    color:white;
     }
.ant-pagination-item-active{
    background-color:transparent;
}
.anticon-left{
    color:white;
}
.anticon-right{
    color:white;
}
.ant-pagination-item-ellipsis{
    color:white;
}
`

export default Style;