import React, { useState } from 'react';
import '../../styles/signup.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import signUpImage from '../../assets/singup.png';

interface myForm {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

const SignUp = () => {
  let [signUpData, setSignUpData] = useState<myForm>({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  //submit document
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name, email, password, confirm } = signUpData;
    console.log(name, email, password, confirm);
    console.log(confirm);
    if (name === '') {
      toast.error('please enter name field');
    }
    if (email === '') {
      toast.error('please enter email field');
    }
    if (password === '') {
      toast.error('please enter password field');
    }
    if (confirm === '') {
      toast.error('please enter confirm password field');
    }
    if (password !== confirm) {
      toast.error('passwords must be the same');
    }
    console.log(signUpData);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="signUp">
      <ToastContainer />
      <div className="innerContainer">
        <img
          src={signUpImage}
          alt="sign up illustration"
          className="signUpImage"
        />
        <form className="inputForm" onSubmit={handleSubmit} method="post">
          <input
            className="singUpInput"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name here..."
            onChange={handleChange}
          />

          <input
            className="singUpInput"
            type="text"
            name="email"
            id="email"
            placeholder="Enter email here..."
            onChange={handleChange}
          />

          <input
            className="singUpInput"
            type="text"
            name="password"
            id="password"
            placeholder="Enter password here..."
            onChange={handleChange}
          />

          <input
            className="singUpInput"
            type="text"
            name="confirm"
            id="confirm"
            placeholder="Enter password again..."
            onChange={handleChange}
          />
          <button className="submitBtn" type="submit">
            Sign Up
          </button>
        </form>
        <p className="signIn">
          Already have an account? <Link to={'/signin'}>sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
