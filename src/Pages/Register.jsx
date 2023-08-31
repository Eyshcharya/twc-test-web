import { TwcLogo } from "../assets/logo.jsx";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { navigateWelcomePage } from "../Slices/homeSlice.jsx";
import { RegisterSchema } from "../Utils/FormValidation.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../Slices/API/actionsApiSlice.js";
import { toast } from "react-toastify";

export const Register = () => {
  const [reg, { isLoading }] = useRegisterMutation();
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
              <button id='login-text'>
                <Link to={`/login`}>{`< Back to Login`}</Link>
              </button>
            </article>
          </section>
        </div>
      </>
    </div>
  );
};
