
import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
  
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setStatus('Email saved!');
        setEmail('');
      } else {
        console.error('Server Error:', data); 
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Network Error:', error); 
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 border-solid border-1 border-black rounded-l-md"
      />
      <button type="submit"  className="bg-black text-white px-4 py-3 border-solid border-1 border-black rounded-r-md hover:bg-gray-700">Subscribe</button>
      <p>{status}</p>
    </form>
    </>
  );
}
