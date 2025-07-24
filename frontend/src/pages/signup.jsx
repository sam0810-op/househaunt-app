import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '', userType: 'renter' });
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await fetch('https://househaunt.onrender.com/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Signup successful! Please login.');
      navigate('/login');
    } else {
      alert(data.message || 'Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, userType: e.target.value })}>
        <option value="renter">Renter</option>
        <option value="owner">Owner</option>
      </select>
      <button onClick={handleSignup} className="btn">Signup</button>
    </div>
  );
}

export default Signup;
