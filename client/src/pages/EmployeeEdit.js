import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import {
  updateEmployee,
  detailEmployee,
  listEmployee,
} from "../store/employeeActions";
import { EMPLOYEE_UPDATE_RESET } from "./../store/employeeActions";
import {
  Form,
  Button,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap:30px;

`;

const EmployeeEdit = ({ match, history }) => {
  const employeeId = match.params.id;

  const [employeeName, setEmployeeName] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState();
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeTeam, setEmployeeTeam] = useState("");
  const [employeeGender, setEmployeeGender] = useState("");

  const dispatch = useDispatch();

  const employeeDetails = useSelector((state) => state.employeeDetails);
  const { loading, employee, error } = employeeDetails;

  const employeeUpdate = useSelector((state) => state.employeeUpdate);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = employeeUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: EMPLOYEE_UPDATE_RESET });
      history.push("/");
      dispatch(listEmployee());
    } else {
      if (!employee.name || employee._id !== employeeId) {
        dispatch(detailEmployee(employeeId));
      } else {
        setEmployeeName(employee.name);
        setEmployeeSalary(employee.salary);
        setEmployeeAddress(employee.address);
        setEmployeeTeam(employee.team);
        setEmployeeGender(employee.gender);
      }
    }
    console.log(employeeGender);
  }, [dispatch, history, employeeId, employee, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEmployee({
        _id: employeeId,
        name: employeeName,
        salary: employeeSalary,
        address: employeeAddress,
        team: employeeTeam,
        gender: employeeGender,
      })
    );
  };

  const radios = [
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
    { name: "Other", value: "Other" },
  ];

  return (
    <div>
      {loadingUpdate && <Loader />}
      {errorUpdate && <p>{errorUpdate}</p>}
      {loading ? (
        <Loader />
      ) : error ? (
        <p> {error}</p>
      ) : (
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <StyledForm>
              <h1>Empployee Edit</h1>

              <Form.Control
                label="Employee Name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
              <Form.Control
                label="Salary"
                value={employeeSalary}
                onChange={(e) => setEmployeeSalary(e.target.value)}
              />
              <Form.Control
                label="Address"
                value={employeeAddress}
                onChange={(e) => setEmployeeAddress(e.target.value)}
              />
              <Form.Control
                label="Team"
                value={employeeTeam}
                onChange={(e) => setEmployeeTeam(e.target.value)}
              />
              {/* <RadioGroup
                aria-label="gender"
                defaultValue={employeeGender}
                name="radio-buttons-group"
                value={employeeGender}
                onChange={(e) => setEmployeeGender(e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup> */}
              <ButtonGroup toggle>
                {radios.map((radio, index) => (
                  <ToggleButton
                    key={index}
                    type="radio"
                    name="radio"
                    value={radio.value}
                    checked={employeeGender === radio.value}
                    onChange={(e) => setEmployeeGender(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>

              <Button variant="primary" onClick={submitHandler}>
                Contained
              </Button>
            </StyledForm>
          </Form>
        </FormContainer>
      )}
    </div>
  );
};

export default EmployeeEdit;
