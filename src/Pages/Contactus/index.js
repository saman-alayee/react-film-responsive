import Style from "./style";

export default function Contactus (){
 return(
      <Style>
       <div className="container holder-box text-center ">
        <div className="holder-box paddig-tb">
            <div >
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViKQLaFRPODymb87a6aoZcwY3G9q5VLCmHA&s"/>
               <p className="mb-15 bold"> contact us </p>
               
            </div>
            <p>If you have a question, found a problem with the website and want to let us,know Contact us now :)</p>
            <p className="mb-40">Note: Entering contact information in the form below is optional. With contact information, we will be in touch with you better!</p>
            <div className="flex flex-direction width gap-10 ">
                <div>
              <input className="padding-input mr-10 " type="text" placeholder="your email"/>
              <input className="padding-input " type="text" placeholder="your name"/>
              </div>
              <div>
              <input className="padding-input mr-10 " type="text" placeholder="your number"/>
              <input className="padding-input mb-40" type="text" placeholder="your meesage"/>
              </div>
              <input className="submit" type="submit" value="Submit"></input>
            </div>
        </div>
       </div>
       </Style>
   
 )
}