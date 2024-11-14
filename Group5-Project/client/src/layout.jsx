import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './components/Logout';
import DeleteAccount from './components/DeleteAccount';

const Layout = ({ loggedIn, onLogout, onDelete }) => {
  return (
    <>
      <div>
        <h1>XTOMIC INC.<img src="./favicon.png" alt="XTOMIC Logo" /></h1>
        <nav>
          | <Link to="/home">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/services">Services</Link> |
          {loggedIn && <Link to="/contacts">Contacts</Link>}
          {!loggedIn && <Link to="/signup">Sign Up</Link>}
          {!loggedIn && <Link to="/signin">Sign In</Link>}
          {loggedIn && <Logout onLogout={onLogout} />}
          {loggedIn && <DeleteAccount onDelete={onDelete} />}
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Layout;
