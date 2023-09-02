import { useState } from "react";
import { MaleAvatar, FemaleAvatar } from "../assets/avatar";
import { EditIcon, DeleteIcon, ArrowIcon } from "../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import { OpenSaveModal, OpenDeleteModal } from "../Slices/ModalSlice";
import { useUpdateContactMutation } from "../Slices/API/contactsApiSlice";
import { toast } from "react-toastify";

const SingleContact = ({ _id, name, email, phone, gender }) => {
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const { isDeleteModalOpen } = useSelector((store) => store.modal);
  const { userID } = useSelector((store) => store.home);

  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [Gender, setGender] = useState(gender);

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editGender, setEditGender] = useState("");

  // to enable switching between genders
  const handleSwitchBtn = (g) => {
    if (g === "male") {
      setGender("female");
      setEditGender("female");
    } else if (g === "female") {
      setGender("male");
      setEditGender("male");
    }
  };

  // handle edit button(Enable editing)
  const handleEditBtn = () => {
    setIsEditable(true);
  };

  // handle save button (saving the edited content)
  const handleSaveBtn = () => {
    setIsEditable(false);
    const contact = {
      contactID: _id,
      userID: userID,
      name: editName || name,
      email: editEmail || email,
      phone: editPhone || phone,
      gender: editGender || gender,
    };

    updateContact(contact)
      .unwrap()
      .then(() => {
        dispatch(OpenSaveModal());
      })
      .catch((error) => {
        toast.error(error.data?.message);
      });
  };

  // handle Form submission
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action='' onSubmit={handleForm}>
        {isEditable ? (
          <>
            <div className='single-contact'>
              {/* avatar */}
              <section className='avatar'>
                {Gender === "female" ? <FemaleAvatar /> : <MaleAvatar />}
              </section>

              {/* name */}
              <section className='contact-name-edit'>
                <input
                  type='text'
                  defaultValue={name}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </section>

              {/* gender */}
              <section className='contact-gender-edit '>
                <input type='text' />
                <div className='gender-switch'>
                  {Gender}
                  <button
                    onClick={() => {
                      handleSwitchBtn(Gender);
                    }}
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </section>

              {/* email */}
              <section className='contact-email-edit '>
                <input
                  type='email'
                  defaultValue={email}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              </section>

              {/* phone */}
              <section className='contact-phone-edit '>
                <input
                  type='number'
                  defaultValue={phone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
              </section>
              <section className='contact-icon'>
                <button id='save-btn' onClick={handleSaveBtn}>
                  {isLoading ? "saving" : "save"}
                </button>
              </section>
            </div>
          </>
        ) : (
          <>
            <div className='single-contact'>
              <section className='avatar'>
                {gender === "female" ? <FemaleAvatar /> : <MaleAvatar />}
              </section>
              <section className='contact-name'>{name}</section>
              <section className='contact-gender'>{gender}</section>
              <section className='contact-email'> {email}</section>
              <section className='contact-phone'>{phone}</section>
              <section className='contact-icon'>
                <button onClick={handleEditBtn}>
                  <EditIcon />
                </button>
                <button
                  onClick={() => {
                    dispatch(OpenDeleteModal({ name, _id, userID }));
                  }}
                >
                  <DeleteIcon />
                </button>
              </section>
            </div>
          </>
        )}
      </form>
    </>
  );
};
export default SingleContact;
