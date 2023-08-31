import { TwcLogo } from "../assets/logo.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { navigateWelcomePage } from "../Slices/homeSlice.jsx";

const Login = () => {
  const [register, setRegister] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = () => {
    setRegister(true);
  };
  const handleLogin = () => {
    setRegister(false);
  };
  return (
    <div className='login-page-container'>
      <div id='twc-logo'>
        <TwcLogo />
        <section>
          <p>
            <span>contacts </span> <br />
            portal
          </p>
        </section>
      </div>
      <div className='circular-segment'></div>

      {!register ? (
        <>
          {/* login */}
          <div className='login-page-body'>
            <section className='head'>
              <p>
                <span>Hi there,</span>
                <br />
                Welcome to our contacts portal
              </p>
            </section>
            <section className='login'>
              <input type='email' placeholder='e-mail' />
              <input type='password' placeholder='password' />
              <article className='login-btn'>
                <button
                  id='login-btn'
                  onClick={() => {
                    dispatch(navigateWelcomePage());
                  }}
                >
                  <Link to='/'>login</Link>
                </button>{" "}
                or{" "}
                <button id='register-text' onClick={handleRegister}>
                  Click here to Register
                </button>
              </article>
            </section>
          </div>
        </>
      ) : (
        <>
          {/* Register */}
          <div className='register-page-body'>
            <section className='head'>
              <p>
                <span>Register Now!</span>
              </p>
            </section>
            <section className='register'>
              <input type='email' placeholder='e-mail' />
              <input type='password' placeholder='create password' />
              <input type='password' placeholder='confirm password' />
              <article className='register-btn'>
                <button id='register-btn'>register</button>
                <br />
                <button
                  id='login-text'
                  onClick={handleLogin}
                >{`< Back to Login`}</button>
              </article>
            </section>
          </div>
        </>
      )}
    </div>
  );
};
export default Login;
