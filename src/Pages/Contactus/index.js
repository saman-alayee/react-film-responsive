import Style from "./style";

export default function Contactus (){
 return(
      <Style>
       <div className="container">
        <div className="holder-box paddig-tb">
            <div className="flex">
               <p className="mb-15 bold"> contact us </p>
               {/* <img className="https://www.google.com/imgres?q=%D8%A7%D8%A8%DA%A9%D9%88%D9%86%20%D8%AA%D9%85%D8%A7%D8%B3%20%D8%A8%D8%A7%20%D9%85%D8%A7&imgurl=https%3A%2F%2Fluxuryaqva.com%2Fwp-content%2Fuploads%2F2022%2F12%2F%25D8%25AA%25D9%2585%25D8%25A7%25D8%25B3-%25D8%25A8%25D8%25A7-%25D9%2585%25D8%25A7.jpg&imgrefurl=https%3A%2F%2Fluxuryaqva.com%2F%25D8%25AA%25D9%2585%25D8%25A7%25D8%25B3-%25D8%25A8%25D8%25A7-%25D9%2585%25D8%25A7&docid=3tjrs40IJUacJM&tbnid=DUBsjeXVEMCV2M&vet=12ahUKEwiuhcOclcGEAxWinf0HHXsMDFwQM3oECEcQAA..i&w=450&h=487&hcb=2&ved=2ahUKEwiuhcOclcGEAxWinf0HHXsMDFwQM3oECEcQAA"/> */}
            </div>
            <p>If you have a question, found a problem with the website and want to let us,know Contact us now :)</p>
            <p className="mb-40">Note: Entering contact information in the form below is optional. With contact information, we will be in touch with you better!</p>
            <div className="text-align mb-15">
                <span className="mr-10 bold"> your email</span>
                <input className="box-input mr-25" type="text"/>
                <span className="mr-10 bold"> your phone</span>
                <input className="box-input mb-15" type="text"/>
            </div>
            <div className="text-align ">
            <span className="bold mr-10"> your massage</span>
            <input className="box-input-bg" type="text"/>
            </div>
            
        </div>
       </div>
       </Style>
   
 )
}