import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Package, ShieldCheck } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (user) {
      setUserInfo(JSON.parse(user));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  };

  if (!userInfo) return null;

  return (
    <div className="profile-page container">
      <div className="profile-header">
        <h1>My Account</h1>
        <p>Manage your profile and orders</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <User size={48} color="white" />
          </div>
          <div className="profile-info-grid">
            <div className="info-group">
              <label><User size={16} /> Full Name</label>
              <p>{userInfo.name}</p>
            </div>
            <div className="info-group">
              <label><Mail size={16} /> Email Address</label>
              <p>{userInfo.email}</p>
            </div>
            <div className="info-group">
              <label><ShieldCheck size={16} /> Account Status</label>
              <p>{userInfo.isAdmin ? 'Admin User' : 'Standard User'}</p>
            </div>
          </div>
          <button className="btn-primary logout-btn-large" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="orders-card">
          <div className="orders-header">
            <Package size={24} />
            <h2>Order History</h2>
          </div>
          <div className="empty-orders">
            <p>You haven't placed any orders yet.</p>
            <button className="btn-secondary" onClick={() => navigate('/')}>
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
