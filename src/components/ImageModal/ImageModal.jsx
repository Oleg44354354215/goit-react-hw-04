import Modal from "react-modal";
import s from "./ImageModal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-20%",
    maxHeight: "900px",
    transform: "translate(-50%, -50%)",
    backgroundColor: `VAR(--color-green-300)`,
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0 , 0 , 0 , 0.6)",
  },
};
Modal.setAppElement("#root");
const ImageModal = ({ photo, isOpen, onRequestClose }) => {
  if (!photo) return;
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      shouldCloseOnEsc={true}
    >
      <div>
        <img
          className={s.photos}
          src={photo.urls.regular}
          alt={photo.alt_description}
        />
      </div>
      <button
        onClick={onRequestClose}
        className={s.but}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "rgba(58, 51, 51, 0.6)",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "20px",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        Х
      </button>
    </Modal>
  );
};

export default ImageModal;
