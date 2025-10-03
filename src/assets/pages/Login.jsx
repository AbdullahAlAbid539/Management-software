import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Login = () => {

    let [email,setEmail]= useState("")
    let [password,setPassword]= useState("")

    let [emailError,setEmailError]= useState("")
    let [passwordError,setPasswordError]= useState("")

    // THIS IS Registration HANDELING VARIABLE

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
        if(!email){
          setEmailError("Email is Required")
        }
        if(!password){
          setPasswordError("Password is Required")
        }
    }

  return (
    <>
      <div className='reg'>

        <div className='re_h1'><h1><b>Login Page</b></h1></div>

        <Container>
        <Form>

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

export default Login
