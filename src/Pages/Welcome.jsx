import { useEffect, useState } from "react";
import SharedLayout2 from "../Layouts/SharedLayout2.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetUserMutation } from "../Slices/API/contactsApiSlice.js";
import { toast } from "react-toastify";
import { setUserID } from "../Slices/homeSlice.jsx";

const Welcome = () => {
  const { isLogin, email } = useSelector((store) => store.home);
  const [User] = useGetUserMutation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      navigate(`/login`);
    } else {
      getUser();
    }
  }, [isLogin]);

  const getUser = async () => {
    User(email)
      .unwrap()
      .then((data) => {
        setUser(data);
        dispatch(setUserID(data._id));
      })
      .catch((error) => {
        toast.error(error.data?.message);
      });
  };

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
            {user?.contacts.length <= 0
              ? "Add your first contact"
              : "Add new contacts"}
          </Link>
        </button>
      </div>
    </>
  );
};
export default Welcome;
