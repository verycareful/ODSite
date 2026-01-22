import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../utils/supabaseClient';

export default function Dashboard() {
  const [odDetails, setODDetails] = useState([]);
  const [namelist, setNamelist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: odData, error: odError } = await supabase.from('ODDetails').select('*');
        const { data: nameData, error: nameError } = await supabase.from('Namelist').select('*');

        if (odError) {
          console.error('ODDetails fetch error:', odError);
          setError(odError);
        } else {
          setODDetails(odData || []);
        }

        if (nameError) {
          console.error('Namelist fetch error:', nameError);
          setError(nameError);
        } else {
          setNamelist(nameData || []);
        }
      } catch (err) {
        console.error('Data fetch error:', err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error Fetching Data</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <Link href="/login">
        <button style={{ marginBottom: '20px' }}>
          Login to Add OD Details
        </button>
      </Link>

      <h2>ODDetails (Total: {odDetails.length})</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>To</th>
            <th>Register Number</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {odDetails.length > 0 ? (
            odDetails.map((entry, index) => (
              <tr key={entry.ID || index}>
                <td>{entry.DATE}</td>
                <td>{entry.FROM}</td>
                <td>{entry.TO}</td>
                <td>{entry['REGISTER NUMBER']}</td>
                <td>{entry.Reason}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No ODDetails found</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Namelist (Total: {namelist.length})</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Register Number</th>
            <th>Name</th>
            <th>Admission Year</th>
            <th>Department</th>
            <th>Course</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {namelist.length > 0 ? (
            namelist.map((entry, index) => (
              <tr key={entry['REGISTER NUMBER'] || index}>
                <td>{entry['REGISTER NUMBER']}</td>
                <td>{entry['Name']}</td>
                <td>{entry['Admission Year']}</td>
                <td>{entry['Department']}</td>
                <td>{entry['Course']}</td>
                <td>{entry['Section']}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Namelist entries found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}