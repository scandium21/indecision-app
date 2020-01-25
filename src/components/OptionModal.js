import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLable="Seleted Option"
      onRequestClose={props.onClick}
    >
      <h3>Seleted Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.onClick}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
