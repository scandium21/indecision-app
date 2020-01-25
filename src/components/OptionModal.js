import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLable="Seleted Option"
      onRequestClose={props.onClick}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Seleted Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.onClick}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;
