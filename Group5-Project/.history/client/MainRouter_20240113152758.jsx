import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './about'
import Contact from './contact'
import Education from './src/education'
import Project from './src/project'
import Layout from './components/layout'


const MainRouter = () => {
 return (<div>
 
 <Routes>

<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/contact" element={<Contact />} />
 
</Routes>
 </div>
 )
}
export default MainRouter

