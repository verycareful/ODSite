// pages/add-oddetail.js
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function AddODDetail() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: '',
    from: '',
    to: '',
    register_number: '',
    reason: ''
  });

  useEffect(() => {
    // Check for user session in localStorage
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem('user');
    
    if (!user) {
      alert('Please log in first');
      return;
    }

    const { error } = await supabase.from('ODDetails').insert([
      {
        date: formData.date,
        from: parseInt(formData.from, 10),
        to: parseInt(formData.to, 10),
        register_number: formData.register_number,
        reason: formData.reason
      }
    ]);

    if (error) {
      console.error('Error inserting record:', error);
      alert('Error inserting record.');
    } else {
      alert('Record added successfully!');
      router.push('/dashboard');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add ODDetails Record</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Date: </label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>From: </label>
          <input type="number" name="from" value={formData.from} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>To: </label>
          <input type="number" name="to" value={formData.to} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Register Number: </label>
          <input type="text" name="register_number" value={formData.register_number} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Reason: </label>
          <textarea name="reason" value={formData.reason} onChange={handleChange} required />
        </div>
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}