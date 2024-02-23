import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Style from "./style";
import { Background } from "../../Helper/Global/style";

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