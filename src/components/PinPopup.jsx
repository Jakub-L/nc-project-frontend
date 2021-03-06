import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Spinner } from 'react-bootstrap';
import { convertIsoDate } from '../utils/pin-utils';
import '../styles/PinPopup.css';

const PinPopup = ({ location, show, handleClose, handleImageLoad, imageLoading }) => {
  const {
    timestamp, photo_url, note, creator, email, user_photo,
  } = location;
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="PinPopup" centered scrollable>
      <Modal.Body className="modal-body">
        {photo_url && <Spinner className={`modal-spinner${imageLoading ? '' : ' hidden'}`} id="spinner" animation="border" role="status" />}
        {photo_url && <img className={`modal-photograph${imageLoading ? ' hidden' : ''}`} src={photo_url} alt="Site photograph" onLoad={handleImageLoad} />}
        {note && <p className="modal-note arup-body">{note}</p>}
        <img className="modal-avatar" src={user_photo} alt="User avatar" />
        <h1 className="modal-username">{creator}</h1>
        <div className="modal-email">
          <a className="arup-link" href={`mailto:${email}`}>
            {email}
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
