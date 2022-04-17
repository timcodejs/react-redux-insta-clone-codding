import ReactModal from "react-modal";
import ModalPopup from "../components/home/post/modalPopup";

const UseModal = ({isOpen, post, setIsOpen}) => {
    return (
        <ReactModal style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                zIndex: 9999
            },
            content: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                border: "none"
            }}} isOpen={isOpen}>
            <ModalPopup post={post} setIsOpen={setIsOpen} />
        </ReactModal>
    )
}

export default UseModal;