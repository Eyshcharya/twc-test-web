import { Icon, LogoutIcon } from '../assets/logo.jsx';
import { Link } from 'react-router-dom';
const SharedLayout = () => {
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
        <button id='logout-btn'>
          <Link to='/login'>logout</Link>
        </button>
      </div>
    </div>
  );
};
export default SharedLayout;
