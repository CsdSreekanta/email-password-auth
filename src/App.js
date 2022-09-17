import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from "./firebase.init";
import { getAuth } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const auth = getAuth(app);

function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };

  const handleOnSubmit = (event) => {
   
    event.preventDefault()
    console.log("form submitted");
  };
  return (
    <div>
       <div className="registration w-50 mx-auto mt-4 border border-primary p-4 rounded">
        <h1 className="text-primary">Registration</h1>
       <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       </div>
    </div>
  );
}

export default App;
