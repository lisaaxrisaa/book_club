/* TODO - add your code to create a functional React component that renders a registration form */
import React from 'react';
import { useCreateUserMutation } from '../Slice/apiSlice';

function Registration() {
  return (
    <>
      <h2>Registration Form</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" placeholder="First name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" type="text" placeholder="Last name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder="Password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

// eslint-disable-next-line no-undef
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<registration form />);

export default Registration;
