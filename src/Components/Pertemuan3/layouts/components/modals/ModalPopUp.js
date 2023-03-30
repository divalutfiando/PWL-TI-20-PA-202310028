import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const states = {
  setState: null,
  changeState(data) {
    if (!this.setState) return;
    this.setState((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });
  },
};

const handleClose = () => {
  states.changeState({
    open: false,
  });
};

const ModalPopUp = () => {
  const [data, setData] = useState({
    open: false,
    header: "ini header default",
    message: "ini message default",
    size: "md",
    footer:"",
    onClose: handleClose,
  });

  states.setState = setData;

  return (
    <Modal show={data.open} onHide={data.onClose} size={data.size}>
      <Modal.Header closeButton>
        <h3 className="modal-title">{data.header}</h3>
      </Modal.Header>
      <Modal.Body>{data.message}</Modal.Body>
      {(data.footer) ? (
        <Modal.Footer>
          <button onClick={data.onClose} className="btn btn-secondary px-10" >No</button>
          {data.footer}
        </Modal.Footer>
      ) : ''}
    </Modal>
  );
};

const openModal = ({ open=true, message, header, size, footer, onClose = () => {} }) => {
  states.changeState({
    message,
    header,
    size,
    open,
    footer,
    onClose: () => {
      onClose();
      handleClose();
    },
  });
};

export default ModalPopUp;
export { openModal };