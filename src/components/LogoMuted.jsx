import * as React from "react";
import Image from 'next/image';
 

// The Logo must have a prop named type with a default value of default
// The default logo must be displayed when no prop is passed
// The muted logo must be displayed when the type prop is muted

export default function LogoMuted(props) {
  return (
         <Image src="/images/logo-muted.svg" 
         {...props.type}
        //  onClick={props.addType}
         height={144}  
         width={144} 
         alt="Logo" />
  );
}

// function LoggedOutUser(props) {
//   return <div>
//      <h1>Sign in, please! </h1>
//      <span>Log out </span>
//    </div>;
// }


 

// const LogoMuted = (props) => {
//   return <button onClick={props.addTrip}>Add a trip</button>
// }

// export default LogoMuted