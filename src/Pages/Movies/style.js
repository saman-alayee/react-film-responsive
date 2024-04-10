import styled from "styled-components"

export const Style= styled.div`
margin: 130px 0;
overflow-x:hidden;
h2{
  color:white;
  width: 15%;
  padding:10px 30px;
  margin-left:30px;
  margin-bottom:30px;
  &:hover{
    background-color:blue;
    border-radius:5px;
  }
}
.title{
  margin-top: 50px;
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
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    padding: 0 20px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    padding: 0 20px;
  }
}

/* Small devices (phones, 576px and up) */
@media (max-width: 767px) {
  .sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 90px;
  }
  h2 {
    width: 35%;
    text-align: center;

  }
  .title{
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}

ul.list{
  

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