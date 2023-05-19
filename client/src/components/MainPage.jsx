import React from 'react';
import { Link } from 'react-router-dom';
// import './MainPage.css';

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <div className="content-container">
        <h1 className="title">Welcome to Task Manager App</h1>
        <p className="description">
          Task Manager App is a powerful tool that helps you stay organized and manage your tasks effectively. With this app, you can create, update, and track your tasks, set reminders, and collaborate with others.
        </p>
      </div>
      <div className="form-container">
        {/* <h2 className="form-title">Sign Up</h2> */}
        <Link to="/SignUp">SignUp</Link>
        <br />
        {/* <h2 className="form-title">Sign In</h2> */}
        <Link to="/SignIns">SignIn</Link>
        <div className='Admin-link'>
        <Link to="/Admin">Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
