// pages/login.js
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    // Fetch user from Users table
    const { data, error } = await supabase
      .from('Users')
      .select('*')
      .eq('EMAIL', email)
      .eq('PASS', password)
      .single();

    if (error || !data) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    } else {
      // Store user info in localStorage for session management
      localStorage.setItem('user', JSON.stringify(data));
      router.push('/add-oddetail');  // Direct navigation to add details page
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', width: '100%' }}>
          Sign In
        </button>
      </form>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Link href="/add-oddetail">
          <button style={{ padding: '10px 20px' }}>
            Go to Add OD Details
          </button>
        </Link>
      </div>
    </div>
  );
}