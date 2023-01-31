import React, { useState } from 'react';
import '../../styles/signin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import signInImage from '../../assets/singin.png';

interface singIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const [signInData, setSignInData] = useState<singIn>({
    email: '',
    password: '',
  });
  const [reRoute, setReRoute] = useState<React.SetStateAction<boolean>>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = signInData;
    console.log(email, password);
    if (email === '') {
      toast.error('please enter email field');
    }
    if (password === '') {
      toast.error('please enter password field');
    }

    console.log(signInData);
  };

  return (
    <div className="signInPage">
      <ToastContainer />
      <div className="innerContainer">
        <img
          src={signInImage}
          alt="sign up illustration"
          className="signUpImage"
        />
        <form className="inputForm" onSubmit={handleSubmit} method="post">
          <input
            className="singInInput"
            type="text"
            name="email"
            id="email"
            placeholder="Enter email here..."
            onChange={handleChange}
          />
          <input
            className="singInInput"
            type="text"
            name="password"
            id="password"
            placeholder="Enter password here..."
            onChange={handleChange}
          />
          <button className="submitBtn" type="submit">
            Sign In
          </button>
        </form>
        <p className="signIn">
          Don't have an account? <Link to={'/signup'}>singup in here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
