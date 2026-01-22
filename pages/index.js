// pages/index.js
import Link from 'next/link';

export default function Index() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>OD Details Management</h1>
      <Link href="/dashboard">
        <button style={{ padding: '10px 20px', margin: '10px' }}>
          View OD Details
        </button>
      </Link>
      <Link href="/login">
        <button style={{ padding: '10px 20px', margin: '10px' }}>
          Login to Add OD Details
        </button>
      </Link>
    </div>
  );
}