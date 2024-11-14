import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './src/Home';
import About from './src/about';
import Services from './src/services';
import Layout from './src/layout';
import SignUp from './src/components/Signup';
import SignIn from './src/components/SignIn';
import Contacts from './src/components/Contacts';

const MainRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleDelete = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <Layout loggedIn={loggedIn} onLogout={handleLogout} onDelete={handleDelete} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
