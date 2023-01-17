import * as React from "react";
import Image from 'next/image';



export default function LogoDefault(props) {
 
  return (
         <Image src="/images/logo.svg" 
         {...props.type}
        //  onClick={props.addType}
         height={144}  
         width={144} 
         alt="Logo" />
  );

   
}


// function LoggedInUser(props) {
//   return <div>
//      <h1>Welcome back! </h1>
//      <span>Log out </span>
//    </div>;
// }
// const AddTripButton = (props) => {
//   return <button onClick={props.addTrip}>Add a trip</button>
// }