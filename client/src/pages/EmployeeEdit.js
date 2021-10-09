import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Loader from "../components/Loader";
import {
  updateEmployee,
  detailEmployee,
  listEmployee,
} from "../store/employeeActions";
import { EMPLOYEE_UPDATE_RESET } from "./../store/employeeActions";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";

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

  return (
    <div>
      {loadingUpdate && <Loader />}
      {errorUpdate && <p>{errorUpdate}</p>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Snackbar> {error}</Snackbar>
      ) : (
        <form noValidate autoComplete="off">
          <Box
            display={{
              display: "flex",
              flexDirection: "column",

            }}
          >
            <TextField
              label="Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
            <TextField
              label="Salary"
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>

            <Button variant="contained" onClick={submitHandler}>
              Contained
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default EmployeeEdit;
