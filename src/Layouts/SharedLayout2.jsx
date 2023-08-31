import { useDispatch } from "react-redux";
import { Icon, LogoutIcon } from "../assets/logo.jsx";
import { Link, useNavigate } from "react-router-dom";
import { NavigateToLogin } from "../Slices/homeSlice.jsx";
import { useLogoutMutation } from "../Slices/API/actionsApiSlice.js";
import { toast } from "react-toastify";

const SharedLayout2 = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap;
      toast.success("Logout Success!");
      dispatch(NavigateToLogin());
      navigate(`/login`);
    } catch (error) {
      toast.error("Logout Failed");
    }
  };
  return (
    <div className='shared-layout'>
      <div className='ellipse'></div>
      <div className='twc-logo-2'>
        <Icon /> <span>twc</span>
      </div>
      <p>
        <span>contacts</span> <br />
        portal
      </p>
      <div className='logout'>
        <button id='logout-icon'>
          <Link to='/login'>
            <LogoutIcon />
          </Link>
        </button>
        <button id='logout-btn' onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};
export default SharedLayout2;
