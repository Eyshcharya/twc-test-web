import { useDispatch } from "react-redux";
import { CloseDeleteSuccessModal } from "../Slices/ModalSlice";

const DeleteModal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <div className='message'>
          Your contact has been deleted successfully!
        </div>
        <div className='btn-container'>
          <button
            onClick={() => {
              dispatch(CloseDeleteSuccessModal());
            }}
            className='modal-btn'
          >
            Okay
          </button>
        </div>
      </div>
    </aside>
  );
};
export default DeleteModal;
