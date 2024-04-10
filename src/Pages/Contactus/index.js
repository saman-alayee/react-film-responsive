import { usePageTitle } from "../../Hooks/usePageTitle";
import Style from "./style";

export default function Contactus (){
  const title = usePageTitle("ContactUs")
 return(
      <Style>
         <div className="container">
       <div className=" holder-box text-center ">
        <div className="holder-box mb-40 paddig-tb">
            <div >
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViKQLaFRPODymb87a6aoZcwY3G9q5VLCmHA&s"/>
               <p className="mb-15 bold"> contact us </p>
               
            </div>
            <p>If you have a question, found a problem with the website and want to let us,know Contact us now :)</p>
            <p className="mb-40">Note: Entering contact information in the form below is optional. With contact information, we will be in touch with you better!</p>
            <div className=" width gap-10 ">
                <div className="row">
                <div className="col-lg-6 col-md-6 sm-12">  
                <input className="padding-input mr-10 input-form" type="text" placeholder="your email"/>
                </div>
                <div className="col-lg-6 col-md-6 sm-12"> 
                <input className="padding-input mr-10 input-form" type="text" placeholder="your name"/> 
                </div>
              
              </div>
              <div className="row">
              <div className="col-lg-6 col-md-6 sm-12">
                <input className="padding-input mr-10 input-form" type="text" placeholder="your number"/>
                </div>
                <div className="col-lg-6 col-md-6 sm-12 ">
              <input className="padding-input mr-10 input-form" type="text" placeholder="your message"/>
              </div>
              </div>
              <div className="button-container">
              <input className="submit" type="submit" value="Submit"></input></div>
            </div>
        </div></div>
       </div>
       </Style>
   
 )
}