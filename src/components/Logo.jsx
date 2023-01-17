import * as React from "react";
import { useState } from 'react'
import ReactDOM from 'react-dom';
import LogoDefault from "./LogoDefault";
import LogoMuted from "./LogoMuted";
 

export default function Logo() {

  // const [state, setState] = useState({type: "default"})

  return (
         <div>
         <LogoDefault type=""/>
         <LogoMuted type="muted"/>
         </div>
  );
}


// export default function Logo({type}) {
// const [state, setState] = useState('default')

//   return (
//     <div>
//       {state === 'default' && (
//         <LogoDefault addType={() => setState('muted') } />
//       )}

//       {state === 'muted' && <LogoMuted />}
//     </div>
//   )
//       }