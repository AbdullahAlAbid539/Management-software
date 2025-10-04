import Side from '../../Components/Side'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Student = () => {

  const [show, setShow] = useState(false);

  const handleClose = () =>setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className='main_menu'>
        <div className='left'>
          <Side />
        </div>
        <div className='right'>
      <Button variant="primary" onClick={handleShow}>
        ADD New Student Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Student Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicDept">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Department Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Student ID</Form.Label>
        <Form.Control type="number" placeholder="Enter Student Id" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Student Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Result</Form.Label>
        <Form.Control type="number" placeholder="Enter Student Result" />
      </Form.Group>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create New
          </Button>
        </Modal.Footer>
      </Modal>


            {/* TABLE HTML THIS AREA HERE */}

      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Department Name</th>
          <th>Student ID</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Abdullah Al Abid</td>
          <td>Computer</td>
          <td>123401</td>
          <td>018********</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shawon Islam</td>
          <td>Computer</td>
          <td>123402</td>
          <td>016********</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Asif Mahmud</td>
          <td>Computer</td>
          <td>123403</td>
          <td>017********</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </div>
    
    </>
  )
}

export default Student

