import { Fragment } from "react";
import Style from "./style";

export default function Header (){
 return(
    <Style>
       <div>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AT8FRSK8zrg2vY6wqExNgT1V7HzXsLrnhO0X9r3pzroESpr-wf15zL0o-btoIh5HCso&usqp=CAU"/>
       </div>
       <div className="holder-menu">
          <div className="menu">
             <ul>
                <li><a href="#"> home</a></li>
                <li><a href="#"> series</a></li>
                <li><a href="#"> moveis</a></li>
                <li><a href="#"> about us</a></li>
                <li><a href="#"> contact us</a></li>
             </ul>
          </div>
          <div >
            <button>search</button>
          </div>
        </div>
    </Style>
 )
}