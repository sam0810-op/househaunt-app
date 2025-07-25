import React, { useEffect, useState } from 'react';
import './ownerrenter.css';

function OwnerDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [form, setForm] = useState({
    title: '',
    address: '',
    description: '',
    cost: '',
    contact: ''
  });
  const [myProps, setMyProps] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchMyProps = async () => {
    const res = await fetch(`https://househaunt.onrender.com/api/property/owner/${user._id}`);
    const data = await res.json();
    setMyProps(data);
  };

  useEffect(() => {
    fetchMyProps();
  }, []);

  const handleAdd = async () => {
    const endpoint = editId
      ? `https://househaunt.onrender.com/api/property/${editId}`
      : `https://househaunt.onrender.com/api/property/add`;
    const method = editId ? 'PUT' : 'POST';

    await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, ownerId: user._id }),
    });

    fetchMyProps();
    setForm({
      title: '',
      address: '',
      description: '',
      cost: '',
      contact: ''
    });
    setEditId(null);
  };

  const handleEdit = (property) => {
    setForm(property);
    setEditId(property._id);
  };

  const handleDelete = async (id) => {
    await fetch(`https://househaunt.onrender.com/api/property/${id}`, { method: 'DELETE' });
    fetchMyProps();
  };

  return (
    <div className="container">
      <h1 className="title">🏠 House Haunt</h1>
      <h2 className="subtitle">Owner Dashboard</h2>

      <div className="form">
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Cost" value={form.cost} onChange={e => setForm({ ...form, cost: e.target.value })} />
        <input placeholder="Contact No." value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} />
        <button onClick={handleAdd} className="btn">{editId ? 'Update' : 'Add'} Property</button>
      </div>

      <h2 className="subtitle">Your Properties</h2>
      <div className="property-grid">
        {myProps.length === 0 ? (
          <p>No properties added yet.</p>
        ) : (
          myProps.map((property) => (
            <div className="property-card" key={property._id}>
              <h3>{property.title}</h3>
              <p><strong>Address:</strong> {property.address}</p>
              <p><strong>Description:</strong> {property.description}</p>
              <p><strong>Cost:</strong> ₹{property.cost}</p>
              <p><strong>Contact:</strong> {property.contact}</p>
              <button onClick={() => handleEdit(property)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(property._id)} className="delete-btn">Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OwnerDashboard;
