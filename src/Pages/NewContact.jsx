import SharedLayout2 from "../Layouts/SharedLayout2";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContactSchema } from "../Utils/FormValidation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateContactMutation } from "../Slices/API/contactsApiSlice";
const NewContact = () => {
  const { userID } = useSelector((store) => store.home);
  const [createContact, { isLoading }] = useCreateContactMutation();
  const navigate = useNavigate();
  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactSchema) });

  // form Submission
  const onSubmit = async (inputs) => {
    const contactDetails = { ...inputs, _id: userID };

    createContact(contactDetails)
      .unwrap()
      .then((data) => {
        toast.success(data?.message);
        navigate(`/contacts/${userID}`);
      })
      .catch((error) => {
        toast.error(error.data?.message);
      });
  };

  return (
    <>
      <SharedLayout2 />

      <div className='new-contact-body'>
        <p>
          <span>New Contact</span>
        </p>
        {/* form */}
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <section className='add-contact'>
            {/* full name */}
            <div>
              <input
                type='text'
                name='name'
                placeholder='full name'
                {...register("name")}
              />
              <p id='form-err'>{errors.name?.message}</p>
            </div>

            {/* email */}
            <div>
              <input type='email' placeholder='e-mail' {...register("email")} />
              <p id='form-err'>{errors.email?.message}</p>
            </div>

            {/* phone */}
            <div>
              <input
                type='text'
                name='phone'
                placeholder='phone number'
                {...register("phone")}
              />
              <p id='form-err'>{errors.phone?.message}</p>
            </div>
          </section>

          {/* gender */}
          <section className='radio'>
            Gender :
            <input
              type='radio'
              name='gender'
              value='male'
              id='male'
              {...register("gender")}
            />
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              name='gender'
              value='female'
              id='female'
              {...register("gender")}
            />
            <label htmlFor='female'>Female</label>
            <p id='radio-err'>{errors.gender?.message}</p>
          </section>
          <button type='submit' disabled={isLoading} id='add-contact-btn2'>
            {isLoading ? "Adding" : "Add Contact"}
          </button>

          <button className='viewContacts-btn'>
            <Link to={`/contacts/${userID}`}> {`View Contacts >`} </Link>
          </button>
        </form>
      </div>
    </>
  );
};
export default NewContact;
