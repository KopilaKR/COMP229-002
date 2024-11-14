import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './src/Home';
import About from './src/about';
import Services from './src/services';
import Layout from './src/layout';
import SignUp from './src/components/SignUp';
import SignIn from './src/components/Signin';
import Contacts from './src/components/Contacts';
import ContactList from './src/components/Contactlist';

const MainRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (role) => {
    setLoggedIn(true);
    setIsAdmin(role === 'admin');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsAdmin(false);
  };

  const handleDelete = () => {
    setLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div>
      <Layout loggedIn={loggedIn} isAdmin={isAdmin} onLogout={handleLogout} onDelete={handleDelete} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/contacts" element={<Contacts />} />
        {isAdmin && <Route path="/contactlist" element={<ContactList />} />}
      </Routes>
    </div>
  );
};

export default MainRouter;
