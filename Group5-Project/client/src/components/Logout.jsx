import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
    navigate('/signin');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
