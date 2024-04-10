
import Style from "./style";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../../Images/logo.png"
import { Link } from "react-router-dom";



export default function Header (){
 return(
    <Style>
      <div className=" dis-menu fixed container">
       <div>
         <Link to="/">
        <img className="logo" src={Logo}/>
        </Link>
       </div>
       <div className="holder-menu">
          <div className="menu">
             <ul>
                <li className="Home"><Link to="/"> Home</Link></li>
                <li className="Series"><Link to="/Movies"> Series</Link></li>
                <li className="Movies"><Link to="/Movies"> Movies</Link></li>
                <li className="AboutUs"><Link to="/About-us"> About us</Link></li>
                <li className="ContactUs"><Link to="/Contact-us"> Contact us</Link></li>
             </ul>
          </div>
          <div className="align-items" >
            <Link to="/search">
            <button href="#" className="search-button"><IoIosSearch/></button>
            </Link>
            <button className="dow-app-red"> Downlod Application</button>
          </div>
        </div>
        </div>
    </Style>
 )
}