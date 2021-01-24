import Employee from "./Employee";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "./../context/EmployeeContext";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAlertShow = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const { employees } = useContext(EmployeeContext);

  useEffect(() => {
    handleClose();
    return () => {
      handleAlertShow();
    };
  }, [employees]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Employee List successfully updated.{" "}
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">E-mail</th>
            <th className="text-center">Address</th>
            <th className="text-center">Phone</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee}></Employee>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm></AddForm>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
