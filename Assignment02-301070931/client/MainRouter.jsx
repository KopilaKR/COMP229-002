//MainRouter.jsx Jongho Baek 301070931 24.10.22
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Project from './src/project'
import Layout from './components/Layout'

const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>
            
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/services" element={<Services />} />
            
        </Routes>
    </div>
    )
}
export default MainRouter
