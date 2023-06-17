import SharedLayout from '../Components/SharedLayout';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../Features/contactSlice';
import { Link } from 'react-router-dom';

const NewContact = () => {
  const dispatch = useDispatch();

  const contactArray = JSON.parse(localStorage.getItem('contactDetails')) || [];
  const date = new Date();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [isFirstContact, setIsFirstContact] = useState(contactArray.length < 1);
  const [id, setId] = useState(date.getTime());

  // generating Id
  useEffect(() => {
    setId(date.getTime());
  }, [name]);

  const enableSubmit =
    email.length > 0 && name.length > 0 && phone.length > 0 && gender != '';

  const handleSubmit = () => {
    if (contactArray.find((contact) => contact.phone === phone)) {
      alert('This number is Already in contacts');
      return;
    } else {
      const contact = {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        id: id,
      };
      dispatch(addContact(contact));

      setName('');
      setEmail('');
      setPhone('');
      // setGender('');
      setIsFirstContact(false);
    }
  };
  return (
    <>
      <SharedLayout />

      <div className='new-contact-body'>
        <p>
          <span>New Contact</span>
        </p>
        <form action=''>
          <section className='add-contact'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='full name'
            />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='e-mail'
            />
            <input
              type='phoneNumber'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='phone number'
            />
          </section>
          <section className='radio'>
            Gender :{' '}
            <input
              type='radio'
              name='gender'
              value='male'
              id='male'
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              name='gender'
              value='female'
              id='female'
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor='female'>Female</label>
          </section>
          <button
            type='submit'
            disabled={!enableSubmit}
            onClick={handleSubmit}
            id='add-contact-btn2'
          >
            {isFirstContact ? (
              <Link> Add your first contact</Link>
            ) : (
              <Link>Add a New Contact</Link>
            )}
          </button>

          {isFirstContact ? null : (
            <button className='viewContacts-btn'>
              <Link to='/contacts'> {`View Contacts >`} </Link>
            </button>
          )}
        </form>
      </div>
    </>
  );
};
export default NewContact;
