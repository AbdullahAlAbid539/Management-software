// THIS IS ALL IMPORT SECTION REACT WEB JSX
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Registration = () => {
    let [userName,setUserName]= useState("")
    let [email,setEmail]= useState("")
    let [password,setPassword]= useState("")

    // THIS IS ERROR HANDELING VARIABLE

    let [userNameError,setUserNameError]= useState("")
    let [emailError,setEmailError]= useState("")
    let [passwordError,setPasswordError]= useState("")

    // THIS IS Registration HANDELING VARIABLE

    let handleusername =(e)=>{
        setUserName(e.target.value)
        setUserNameError("")
    }
    let handleemail =(e)=>{
        setEmail(e.target.value)
        setEmailError("")
    }
    let handlepassword =(e)=>{
        setPassword(e.target.value)
        setPasswordError("")
    }

    let handlesubmit =(e)=>{
        e.preventDefault()
        if(!userName){
            setUserNameError("Username is Required")
        }
        if(!email){
            setEmailError("Email is Required")
        }
        if(!password){
            setPasswordError("Password is Required")
        }
    }

  return (
    <>
    <div className='main_re'>
        <div className='ma_h1'><h1>Barishal Polytechnic Institute</h1></div>
        <div className='logo'>
            <img src="public/pic/img.png" alt="logo" />
        </div>
        <div className='ma1_h1'><h1>DEPT:- CST (21-22)</h1></div>
    </div>
    <div className='reg'>
        <Container>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>User Name</Form.Label>
            <Form.Control onChange={handleusername} type="text" placeholder="Enter User name" />
            <Form.Text className="text-muted">
            Your User Name Will show top in Your Profile.
            </Form.Text>
        </Form.Group>
        {
            userNameError &&
            <Alert key="danger" variant="danger">
                {
                    userNameError
                }
            </Alert>
        }

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleemail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            Your E-mail will remain Private.
            </Form.Text>
        </Form.Group>

        {
            emailError &&
            <Alert key="danger" variant="danger">
                {
                    emailError
                }
            </Alert>
        }



        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handlepassword} type="password" placeholder="Password" />
        </Form.Group>

        {
            passwordError &&
            <Alert key="danger" variant="danger">
                {
                    passwordError
                }
            </Alert>
        }


        <Button onClick={handlesubmit} variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </Container>
    </div>
    </>
  )
}

export default Registration
