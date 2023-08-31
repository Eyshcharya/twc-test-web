import { TwcLogo } from "../assets/logo.jsx";
import { useDispatch } from "react-redux";
import { navigateWelcomePage } from "../Slices/homeSlice.jsx";
import { LoginSchema } from "../Utils/FormValidation.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../Slices/API/actionsApiSlice.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  // form Submission
  const onSubmit = async (inputs) => {
    const loginDetails = { ...inputs };
    const { email } = loginDetails;
    // console.log(loginDetails);

    login(loginDetails)
      .unwrap()
      .then((data) => {
        toast.success(data?.message);
        dispatch(navigateWelcomePage({ email }));
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.data?.message);
      });
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
            {/* form */}
            <form action='' onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <input type='email' placeholder='e-mail' {...register("email")} />
              <p className='error-text'>{errors.email?.message}</p>

              {/* password */}
              <input
                type='password'
                placeholder='password'
                {...register("password")}
              />
              <p className='error-text'>{errors.password?.message}</p>

              <article className='login-btn'>
                {/* login button */}
                <button id='login-btn' disabled={isLoading}>
                  {isLoading ? "logging In..." : "login"}
                </button>{" "}
                or
                {/* register link */}
                <button>
                  <Link id='register-text' to={`/register`}>
                    Click here to Register
                  </Link>
                </button>
              </article>
            </form>
          </section>
        </div>
      </>
    </div>
  );
};
export default Login;
