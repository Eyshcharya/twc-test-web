import SharedLayout2 from "../Layouts/SharedLayout2";
import SingleContact from "../Components/SingleContact";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SaveModal from "../Components/SaveModal";
import DeleteModal from "../Components/DeleteModal";
import { useGetContactsQuery } from "../Slices/API/contactsApiSlice";
import { useEffect } from "react";

const Contacts = () => {
  const { isSaveModelOpen, isDeleteSuccessOpen } = useSelector(
    (store) => store.modal
  );
  const { userID, isLogin } = useSelector((store) => store.home);
  const { data, isLoading } = useGetContactsQuery(userID);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(`/login`);
    }
  }, [isLogin]);

  return (
    <>
      <SharedLayout2 />
      {isSaveModelOpen && <SaveModal />}
      {isDeleteSuccessOpen && <DeleteModal />}

      <div className='contacts-page'>
        <button id='add-contact-btn3'>
          <Link to='/contacts/new'>Add new Contact</Link>
        </button>
        <div className='contact-head'>
          {isLoading ? (
            <p>
              <span>Loading...</span>
            </p>
          ) : (
            <p>
              <span>Contacts</span>
            </p>
          )}
        </div>

        <div className='contacts-list'>
          <div className='list-head'>
            <div> </div>
            <div>Full Name</div>
            <div>Gender</div>
            <div>E-mail</div>
            <div>Phone Number</div>
          </div>
          {data?.map((contact, index) => {
            return (
              <SingleContact key={contact._id} {...contact} index={index} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Contacts;
