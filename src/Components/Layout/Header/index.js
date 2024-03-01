
import Style from "./style";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../../Images/logo.png"
import { Link, NavLink } from "react-router-dom";



export default function Header (){
 return(
    <Style>
      <div className="fixed dis-menu">
       <div>
        <img className="logo" src={Logo}/>
       </div>
       <div className="holder-menu">
          <div className="menu">
             <ul>
                <li><Link to="/"> home</Link></li>
                <li><Link to="#"> series</Link></li>
                <li><Link to="#"> moveis</Link></li>
                <li><Link to="/About-us"> about us</Link></li>
                <li><Link to="/Contact-us"> contact us</Link></li>
             </ul>
          </div>
          <div className="align-items" >
            <a href="#" className="search-button"><IoIosSearch/></a>
            <a href="#" className="dow-app-red"> Downlod Application</a>
          </div>
        </div>
        </div>
    </Style>
 )
}