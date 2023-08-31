import { useDispatch } from "react-redux";
import { CloseSaveModal } from "../Slices/ModalSlice";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <div className='message'>Your contact has been saved successfully!</div>
        <div className='btn-container'>
          <button
            onClick={() => {
              dispatch(CloseSaveModal());
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
export default Modal;
