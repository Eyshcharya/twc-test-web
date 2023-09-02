import { CloseDeleteModal, OpenDeleteSuccessModal } from "../Slices/ModalSlice";
import { toast } from "react-toastify";
import { useDeleteContactMutation } from "../Slices/API/contactsApiSlice";
import { useDispatch, useSelector } from "react-redux";

const ConfirmDeleteModal = () => {
  const { contactData } = useSelector((store) => store.modal);
  const [deleteContact] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const { name } = contactData;
  // handle delete contact
  const handleDelete = () => {
    deleteContact(contactData)
      .unwrap()
      .then(() => {
        dispatch(CloseDeleteModal());
        dispatch(OpenDeleteSuccessModal());
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };
  return (
    <>
      <aside className='modal-container'>
        <div className='modal'>
          <div className='message'>
            {`Do you want to delete the contact ${name}? `}
          </div>
          <div className='btn-container2'>
            <button onClick={handleDelete}>Yes</button>
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
  );
};
export default ConfirmDeleteModal;
