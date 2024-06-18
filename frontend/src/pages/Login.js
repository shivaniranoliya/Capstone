import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheet/Login_Signup.css';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      toast.error('Passwords do not match');
      return;
    }

    try {
      const backend = 'http://localhost:5000';
      const response = await fetch(
        isLogin ? `${backend}/api/auth/login` : `${backend}/api/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            isLogin
              ? { email, password }
              : { username, email, password, role }
          )
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast.success(isLogin ? 'Login successful' : 'Registration successful');
      setError('');

      if (isLogin) {
        console.log(data)
        login(data);
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="image-container">
        <img src="./eventBooking.jpg" alt="Event" />
      </div>
      <div className="form-container">
        <h2>Welcome to Eventify</h2>
        <p>Discover and book the best events near you.</p>
        <div className="toggle-container">
          <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Sign Up</button>
        </div>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label>Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}
          {!isLogin && (
            <div>
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="user">User</option>
                <option value="organizer">Organizer</option>
              </select>
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        {isLogin && <p><a href="#">Forgot password?</a></p>}
      </div>
    </div>
  );
};

export default Login;
