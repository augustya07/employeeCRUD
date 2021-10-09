import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import useStyles from "@mui/material/useStyles";

import Loader from "../components/Loader";

import { createEmployee } from "../store/employeeActions";
import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledFormContainer = styled.div`
  margin: auto;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  gap:10px;

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <form noValidate autoComplete="off" style={{ margin: 'auto'}}>
          <StyledForm>
            <TextField
              label="Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
            <TextField
              label="Salaray"
              value={employeeSalary}
              onChange={(e) => setEmployeeSalary(e.target.value)}
            />
            <TextField
              label="Address"
              value={employeeAddress}
              onChange={(e) => setEmployeeAddress(e.target.value)}
            />
            <TextField
              label="Team"
              value={employeeTeam}
              onChange={(e) => setEmployeeTeam(e.target.value)}
            />
              <RadioGroup
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
              </RadioGroup>

            <Button variant="contained" onClick={addEmployeeHandler}>
              Contained
            </Button>
          </StyledForm>
        </form>
      )}
    </>
  );
};

export default AddEmploye;
