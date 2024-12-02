import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
    navigate('/signin');
  };

  return <a href="#" onClick={handleLogout}>Logout</a>;
};

export default Logout;
