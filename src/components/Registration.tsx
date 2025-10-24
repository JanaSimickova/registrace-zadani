import React from "react";
import { useState } from "react";
import './Registration.css';

export interface UserStructure {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Registration = () => {
  const [user, setUser] = useState<UserStructure>({
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
   })
  }

  return (
    <div className="registration-container">
      <img className="registration-image" src="src/images/user.png" alt="Formulář" width="50%" height="auto" />
      <form className="registration-form" onSubmit={handleSubmit}>
        <input className="registration-input"
          type="email"
          name="email"
          placeholder="Email Address" 
          value={user.email}
          onChange={handleChange}
        />
        <input className="registration-input"
          type="text"
          name="username"
          placeholder="User Name"
          value=
          {user.email.includes('@') ? 
            user.username = user.email.split('@')[0] :
            user.username}
          onChange={handleChange}
        />
        <input className="registration-input"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <input className="registration-input"
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
        <button className="registration-button" type="submit">REGISTER</button>
      </form>
    </div>
  );
}
