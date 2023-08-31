import { useDispatch } from "react-redux";
import { Icon, LogoutIcon } from "../assets/logo.jsx";
import { Link, useNavigate } from "react-router-dom";
import { NavigateToLogin } from "../Slices/homeSlice.jsx";
const SharedLayout2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(NavigateToLogin());
    navigate(`/login`);
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
