import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const endpoint = isRegister ? '/api/users' : '/api/users/login';
      const body = isRegister ? { name, email, password } : { email, password };
      
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Store token in localStorage
      localStorage.setItem('userInfo', JSON.stringify(data));
      
      // Redirect to home page with a full reload to update Navbar state
      window.location.href = '/';
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <Store className="login-icon" />
          <h2>{isRegister ? 'Create an Account' : 'Welcome Back'}</h2>
          <p>{isRegister ? 'Sign up to start shopping' : 'Please sign in to your account'}</p>
        </div>
        
        {error && <div className="error-message" style={{ color: '#ef4444', textAlign: 'center', marginBottom: '15px', fontSize: '0.9rem' }}>{error}</div>}
        
        <form className="login-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isRegister}
              />
            </div>
          )}
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button className="btn-primary login-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Processing...' : (isRegister ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="login-footer">
          {isRegister ? (
            <p>Already have an account? <span onClick={() => { setIsRegister(false); setError(''); }}>Sign In</span></p>
          ) : (
            <p>Don't have an account? <span onClick={() => { setIsRegister(true); setError(''); }}>Sign Up</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
