import * as React from "react"; 
import Image from 'next/image';

// The Logo must have a prop named type with a default value of default
// The default logo must be displayed when no prop is passed
// The muted logo must be displayed when the type prop is muted

export default function MutedLogo() {
  return (
         <Image src="/images/logo-muted.svg" 
         height={80}  
         width={80} 
         alt="Logo" />
  
  );
}

