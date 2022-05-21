import React, { useState } from 'react';

export function RegistrationView(props) {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ email, setEmail] = useState('');
  const [ birthday, setBirthday] = useState('');

  handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
  }

  return (
    <form>
      <label>
        Username:
        <input 
          type="text" value={username} 
          onChange={e => setUsername(e.target.value)}
          placeholder="Username" required />
      </label>
      <label>Password:
        <input 
          type="text" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          placeholder="Password" required />
        </label>
      <label>
        Email:
        <input 
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder="your@mail.com" required />
      </label>
      <label>
        Birthday:
        <input 
          type="text" 
          value={birthday} 
          onChange={e => setBirthday(e.target.value)}
          placeholder="YYYY-MM-DD" />
      </label>
      <button type="button" onClick={handleRegister}>Register</button>
    </form>
  )
}