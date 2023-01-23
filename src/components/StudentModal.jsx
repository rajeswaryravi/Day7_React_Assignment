import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StudentModal({ studentDetails }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <hr></hr>
      <Button variant="primary" onClick={handleShow}>
        Student 1
      </Button> <hr>
      </hr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {studentDetails[0].name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={studentDetails[0].image} style={{ height: "100px" }}></img>
          <p>ID: {studentDetails[0].id}</p>
          <p>Department: {studentDetails[0].Department}</p>
          <p>Address: {studentDetails[0].Address}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentModal;