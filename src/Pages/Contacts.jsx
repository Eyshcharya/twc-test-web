import SharedLayout2 from "../Layouts/SharedLayout2";
import SingleContact from "../Components/SingleContact";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SaveModal from "../Components/SaveModal";
import DeleteModal from "../Components/DeleteModal";

const Contacts = () => {
  const { contactArray } = useSelector((store) => store.contact);

  const { isSaveModelOpen, isDeleteSuccessOpen } = useSelector(
    (store) => store.modal
  );

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
          <p>
            <span>Contacts</span>
          </p>
        </div>

        <div className='contacts-list'>
          <div className='list-head'>
            <div> </div>
            <div>Full Name</div>
            <div>Gender</div>
            <div>E-mail</div>
            <div>Phone Number</div>
          </div>
          {contactArray.map((contact, index) => {
            return (
              <SingleContact key={contact.id} {...contact} index={index} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Contacts;
