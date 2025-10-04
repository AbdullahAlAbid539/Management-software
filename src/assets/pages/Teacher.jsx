// THIS IS TEACHER JSX SECTION JSX
import Side from '../../Components/Side'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Teacher = () => {


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
        ADD New Teacher Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD New Teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Teacher Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Teacher Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicDept">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Department Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Teacher ID</Form.Label>
        <Form.Control type="number" placeholder="Enter Teacher Id" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Teacher Phone Number" />
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
          <th>Teacher Name</th>
          <th>Department Name</th>
          <th>Teacher ID</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Abdullah</td>
          <td>Computer</td>
          <td>1234501</td>
          <td>018********</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shawon</td>
          <td>Computer</td>
          <td>1234502</td>
          <td>016********</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Asif</td>
          <td>Computer</td>
          <td>1234503</td>
          <td>017********</td>
        </tr>
      </tbody>
    </Table>
        </div>
        
      </div>
    </>
  )
}

export default Teacher
