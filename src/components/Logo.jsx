import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';

let imageStatus = {
  muted: 'logo-muted.svg',
  default: 'logo.svg'
}

export default function LogoMuted() {
  return (
         <Link href="/about">
         <Image src="/images/logo.svg" 
         height={80}  
         width={80} 
         alt="Logo" />
         </Link>
  );
}

