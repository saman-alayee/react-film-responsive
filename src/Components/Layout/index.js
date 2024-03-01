import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Style from "./Header/style";



export default function Layout (props){
 return(
        <Fragment>
            <Header/>   
            <Outlet/>
            <Style>   
            {props.children}
            </Style>  
            <Footer/>
        </Fragment>
 )
}