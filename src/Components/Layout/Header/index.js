
import Style from "./style";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../../Images/logo.png"
import { Link, NavLink } from "react-router-dom";


export default function Header (){
 return(
    <Style>
       <div>
        <img className="logo" src={Logo}/>
       </div>
       <div className="holder-menu">
          <div className="menu">
             <ul>
                <li><a to="#"> home</a></li>
                <li><a href="#"> series</a></li>
                <li><a href="#"> moveis</a></li>
                <li><a href="#"> about us</a></li>
                <li><a href="#"> contact us</a></li>
             </ul>
          </div>
          <div >
            <a href="#" className="search-button"><IoIosSearch/></a>
          </div>
        </div>
    </Style>
 )
}