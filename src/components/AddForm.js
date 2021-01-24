import { Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import { EmployeeContext } from "./../context/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };



  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          rows={3}
        ></Form.Control>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </FormGroup>
      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
