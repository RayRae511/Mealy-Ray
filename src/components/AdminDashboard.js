// src/components/AdminDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/meals">Manage Meals</Link></li>
        <li><Link to="/menu">Set Menu for the Day</Link></li>
        <li><Link to="/orders">View Orders</Link></li>
        <li><Link to="/earnings">View Earnings</Link></li>
        <li><Link to="/history">Order History</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
