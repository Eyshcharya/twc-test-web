import { useEffect } from "react";
import SharedLayout2 from "../Layouts/SharedLayout2.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { isLogin } = useSelector((store) => store.home);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(`/login`);
    }
  }, [isLogin]);
  return (
    <>
      <SharedLayout2 />

      <div className='welcome-page-body'>
        <p>
          <span>Welcome,</span> <br />
          This is where your contacts will live. Click the button below to add a
          new contact.
        </p>
        <button id='add-contact-btn'>
          <Link to='/contacts/new'>
            {/* {contactArray.length < 1
                  ? "Add your first contact"
                  : "Add new contacts"} */}
            sth
          </Link>
        </button>
      </div>
    </>
  );
};
export default Welcome;
