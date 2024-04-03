
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Style from "./Header/style";
import { Container } from "./style";




export default function Layout (props){
 return(
        <Container>
            <Header/>   
            <Outlet/>
            <Style>   
            {props.children}
            </Style>  
            <Footer/>
        </Container>
 )
}