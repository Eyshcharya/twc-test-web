import { useState } from 'react';
import { MaleAvatar, FemaleAvatar } from '../assets/avatar';
import { EditIcon, DeleteIcon, ArrowIcon } from '../assets/icon';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../Features/contactSlice';
import {
  OpenSaveModal,
  OpenDeleteModal,
  CloseDeleteModal,
  OpenDeleteSuccessModal,
} from '../Features/ModalSlice';

const SingleContact = ({ id, name, email, phone, index, gender }) => {
  const { isDeleteModalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editGender, setEditGender] = useState('');

  const [Gender, setGender] = useState(gender);

  // to enable switching between genders
  const handleSwitchBtn = (g) => {
    if (g === 'male') {
      setGender('female');
      setEditGender('female');
    } else if (g === 'female') {
      setGender('male');
      setEditGender('male');
    }
  };

  const handleEditBtn = () => {
    setIsEditable(true);
  };
  const handleSaveBtn = () => {
    setIsEditable(false);
    const contact = {
      name: editName || name,
      email: editEmail || email,
      phone: editPhone || phone,
      gender: editGender || gender,
      id: id,
      index: index,
    };

    dispatch(editContact(contact));
    dispatch(OpenSaveModal());
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isDeleteModalOpen && (
        <>
          <aside className='modal-container'>
            <div className='modal'>
              <div className='message'>
                {`Do you want to delete the contact "${name}" ? `}
              </div>
              <div className='btn-container2'>
                <button
                  onClick={() => {
                    dispatch(deleteContact({ id }));
                    dispatch(CloseDeleteModal());
                    dispatch(OpenDeleteSuccessModal());
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    dispatch(CloseDeleteModal());
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
      <form action='' onSubmit={handleForm}>
        {isEditable ? (
          <>
            <div className='single-contact'>
              <section className='avatar'>
                {Gender === 'female' ? <FemaleAvatar /> : <MaleAvatar />}
              </section>
              <section className='contact-name-edit'>
                <input
                  type='text'
                  defaultValue={name}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </section>
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
              <section className='contact-email-edit '>
                <input
                  type='email'
                  defaultValue={email}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              </section>
              <section className='contact-phone-edit '>
                <input
                  type='number'
                  defaultValue={phone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
              </section>
              <section className='contact-icon'>
                <button id='save-btn' onClick={handleSaveBtn}>
                  save
                </button>
              </section>
            </div>
          </>
        ) : (
          <>
            <div className='single-contact'>
              <section className='avatar'>
                {gender === 'female' ? <FemaleAvatar /> : <MaleAvatar />}
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
                    dispatch(OpenDeleteModal());
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
