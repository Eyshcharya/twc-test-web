import SharedLayout from '../Components/SharedLayout.jsx';
import Login from './Login.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const { isLogin } = useSelector((store) => store.home);
  const { contactArray } = useSelector((store) => store.contact);
  return (
    <>
      {isLogin ? (
        <Login />
      ) : (
        <>
          <SharedLayout />

          <div className='welcome-page-body'>
            <p>
              <span>Welcome,</span> <br />
              This is where your contacts will live. Click the button below to
              add a new contact.
            </p>
            <button id='add-contact-btn'>
              <Link to='/contacts/new'>
                {contactArray.length < 1
                  ? 'Add your first contact'
                  : 'Add new contacts'}
              </Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Welcome;
