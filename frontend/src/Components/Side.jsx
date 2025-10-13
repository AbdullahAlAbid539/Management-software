import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Side = () => {
  return (
    <div className='side'>

        <div className='logo_si'><img src="public/pic/img.png" alt="logo" /></div>

    <ListGroup>
      <ListGroup.Item>
        <a href="/teacher">Teacher</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="/student">Student</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="/attendance">Attendance</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="/result">Result</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="/leave">Leave</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="/pdf">PDF Of Book</a>
      </ListGroup.Item>
    </ListGroup>

    <a href="/" className='a1'>Logout</a>


      
    </div>
  )
}

export default Side
