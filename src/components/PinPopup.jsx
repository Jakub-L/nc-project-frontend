import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const PinPopup = ({ location, show, handleClose }) => {
  const { timestamp, photo_url, note } = location;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{timestamp}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="modal-photograph" src={photo_url} alt="Site photograph" />
        {note}
      </Modal.Body>
    </Modal>
  );
};

PinPopup.propTypes = {
  location: PropTypes.shape({
    timestamp: PropTypes.string,
    photo_url: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PinPopup;
