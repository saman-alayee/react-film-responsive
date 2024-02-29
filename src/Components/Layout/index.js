import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Style from "./style";


export default function Layout (props){
 return(
        <Fragment>
            <Header/>
            <Style>
            {props.children}
            </Style>
            <Footer/>
        </Fragment>
 )
}