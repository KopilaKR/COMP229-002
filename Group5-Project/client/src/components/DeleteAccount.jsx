import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = ({ onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/auth/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Unknown error');
      }

      localStorage.removeItem('token');
      onDelete();
      navigate('/signup');
    } catch (err) {
      console.error('Error deleting account:', err);
      alert(err.message);
    }
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default DeleteAccount;
