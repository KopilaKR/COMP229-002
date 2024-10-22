//layout.jsx Jongho Baek 301070931 24.10.22
import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
  <>
  <div id="layoutdiv1">
   <h1>Jongho's Portfolio<img src="./favicon.png"></img></h1>
   <nav id="layoutnav1">
    | <Link id='layerlink1' to="/home">Home</Link> | <Link id='layerlink1' to="/about">About</Link> | <Link id='layerlink1' to="/project">Projects</Link> | <Link id='layerlink1' to="/services">Services</Link> | <Link id='layerlink1' to="/contact">Contact</Link> |
   </nav>
   </div>
   <hr />
  </>
 );
}
