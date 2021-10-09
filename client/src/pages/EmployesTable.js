import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEmployee, deletemployee } from "../store/employeeActions";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@material-ui/core/TablePagination";


const EmployesTable = ({ match}) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, employee, error,page, pages } = employeeList;

  const employeeDelete = useSelector((state) => state.employeeDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = employeeDelete;
  //console.log(employee)
  const employeeCreate = useSelector((state) => state.employeeCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    employee: createdEmployee,
  } = employeeCreate;

  useEffect(() => {
    dispatch(listEmployee(keyword, pageNumber));
    console.log(employee);
  }, [successDelete, keyword, dispatch,pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deletemployee(id));
    }
  };

  const employeeUpdateHandler = () => {
    dispatch({
      type: "SET_VISIBLE",
      payload: true,
    });
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : error ? (
        <p> {error}</p>
      ) : (
        <>
          {loadingDelete && <Loader />}
          {errorDelete && <p>{errorDelete}</p>}

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Salary</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right">Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employee.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.salary}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.team}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => deleteHandler(row._id)}
                        color="error"
                        style={{ marginRight: "16px" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <Link to={`/employee/${row._id}`}>
                        <IconButton
                          color="secondary"
                          startIcon={<EditIcon />}
                          onClick={employeeUpdateHandler}
                        ></IconButton>

                        <EditIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Link to=> </Link> */}

        </>
      )}
    </>
  );
};  

export default EmployesTable;
