
import { usePageTitle } from "../../Hooks/usePageTitle";
import Style from "./style";

export default function AboutUs (){
    const title = usePageTitle("AboutUs")
 return(
      <Style>
        <div className="container">
       <div className=" holder-box">
       <div className="row">
       <div className="col-lg-3 col-md-3 sm-12">       
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioRzSS0C91mV7zPc0ADfzs773elXOMf1tUg&s"/></div>
        <div className=" col-lg-9 col-md-9 sm-12">
            <p className="bold">AboutUs</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum.</p>
        </div> </div>
       </div></div>
       </Style>
   
 )
}