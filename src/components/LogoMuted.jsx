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
         <Image src="/images/${imageStatus.value}" 
         height={144}  
         width={144} 
         alt="Logo" />
         </Link>
  );
}

