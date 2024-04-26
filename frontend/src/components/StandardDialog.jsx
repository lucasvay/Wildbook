import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function StandardDialog({ open, onClose, title, titleId, children, ...rest }) {
  return (
    <Modal show={open} onHide={onClose} {...rest}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span id={titleId}>{title}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
