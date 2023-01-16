import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import {useState} from 'react';

export default function LogoMuted({ facility, onDeactivate, onActivate }) {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };


  return (
    // <div>
    //      <Image id="logo"
    //      height={80}  
    //      width={80} 
    //      alt="Logo" />
          
    //      </div>

<div>
<button onClick={handleClick}>Click</button>

{/* 👇️ show elements on click */}
{isShown && (
  <div>
    <h2>Some content here</h2>
  </div>
)}

{/* 👇️ show component on click */}
{isShown && <Box />}
</div>
  );
}


function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
