import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { convertIsoDate } from '../utils/pin-utils';
import '../styles/PinPopup.css';

const PinPopup = ({ location, show, handleClose }) => {
  const {
    timestamp, photo_url, note, creator, contact, user_photo,
  } = location;
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="PinPopup" centered>
      <Modal.Body className="modal-body">
        {photo_url && <img className="modal-photograph" src={photo_url} alt="Site photograph" />}
        {note && <p className="modal-note arup-body">{note}</p>}
        <img className="modal-avatar" src={user_photo} alt="User avatar" />
        <h1 className="modal-username">{creator}</h1>
        <div className="modal-email">
          <a className="arup-link" href={`mailto:${contact}`}>
            {contact}
          </a>
        </div>
        <div className="modal-timestamp">{convertIsoDate(timestamp)}</div>
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
