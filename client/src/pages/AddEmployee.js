import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { createEmployee } from "../store/employeeActions";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  margin: auto;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap:30px;

`;

const StyledRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

const AddEmploye = ({ match, history }) => {
  const employeeId = match.params.id;

  const [employeeName, setEmployeeName] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState();
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeTeam, setEmployeeTeam] = useState("");
  const [employeeGender, setEmployeeGender] = useState("");

  const dispatch = useDispatch();

  // const employeeCreate = useSelector((state) => state.employeeCreate);
  // const { loading, error, employee } = employeeCreate;

  const employeeCreate = useSelector((state) => state.employeeCreate);
  const { loading, employee, error } = employeeCreate;

  useEffect(() => {
    if (employee) {
      history.push("/");
    }
  }, [employee]);

  const addEmployeeHandler = async () => {
    dispatch(
      createEmployee({
        name: employeeName,
        salary: employeeSalary,
        address: employeeAddress,
        team: employeeTeam,
        gender: employeeGender,
      })
    );
    dispatch({
      type: "SET_VISIBLE",
      payload: false,
    });
  };

  const radios = [
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
    { name: "Other", value: "Other" },
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <FormContainer>
          <Form onSubmit={addEmployeeHandler} className="m-3">
            <StyledForm>
            <h1>Empployee New</h1>

              <Form.Group controlId="Name">
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="Slaray">
                <Form.Control
                  type="number"
                  label="Salaray"
                  placeholder="Enter Salary"
                  value={employeeSalary}
                  onChange={(e) => setEmployeeSalary(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="Slaray">
                <Form.Control
                  label="Address"
                  value={employeeAddress}
                  placeholder="Enter Address"
                  onChange={(e) => setEmployeeAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  label="Team"
                  placeholder="Enter Team"
                  value={employeeTeam}
                  onChange={(e) => setEmployeeTeam(e.target.value)}
                />
              </Form.Group>

              {/* <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                value={employeeGender}
                onChange={(e) => setEmployeeGender(e.target.value)}
                >
                <StyledRadio>
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
            </StyledRadio>
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

              <Button variant="primary" onClick={addEmployeeHandler}>
                Create
              </Button>
            </StyledForm>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default AddEmploye;
