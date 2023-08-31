import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { navigateWelcomePage } from "../Slices/homeSlice.jsx";
import { RegisterSchema } from "../Utils/FormValidation.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../Slices/API/actionsApiSlice.js";
import { toast } from "react-toastify";
import SharedLayout1 from "../Layouts/SharedLayout1.jsx";

export const Register = () => {
  const [reg, { isLoading }] = useRegisterMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  // form Submission
  const onSubmit = async (inputs) => {
    const Inputs = { ...inputs };
    const { email, password } = Inputs;
    const userDetails = { email, password };
    // console.log(userDetails);

    reg(userDetails)
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
      <SharedLayout1 />
      <>
        {/* Register */}
        <div className='register-page-body'>
          <section className='head'>
            <p>
              <span>Register Now!</span>
            </p>
          </section>
          <section className='register'>
            {/* form */}
            <form action='' onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <input type='email' placeholder='e-mail' {...register("email")} />
              <p className='error-text'>{errors.email?.message}</p>

              {/* password */}
              <input
                type='password'
                placeholder='create password'
                {...register("password")}
              />
              <p className='error-text'>{errors.password?.message}</p>

              {/* confirm password */}
              <input
                type='password'
                placeholder='confirm password'
                {...register("confirmPassword")}
              />
              <p className='error-text'>{errors.confirmPassword?.message}</p>

              <article className='register-btn'>
                {/*register button */}
                <button disabled={isLoading} id='register-btn'>
                  {isLoading ? "registering..." : "register"}
                </button>
                <br />
                {/* login link */}
                <button id='login-text'>
                  <Link to={`/login`}>{`< Back to Login`}</Link>
                </button>
              </article>
            </form>
          </section>
        </div>
      </>
    </div>
  );
};
