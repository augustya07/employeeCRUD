import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEmployee, deletemployee } from "../store/employeeActions";
import Loader from "../components/Loader";
import Header from "../components/Header";
import PaginateComponent from "../components/PaginateComponent";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";

const EmployesTable = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, employee, error, page, pages } = employeeList;

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
  }, [successDelete, keyword, dispatch, pageNumber]);

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
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th> ID</th>
                <th align="right">Name</th>
                <th align="right">Salary</th>
                <th align="right">Address</th>
                <th align="right">Team</th>
                <th align="right">Gender</th>
                <th align="right">Options</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((row) => (
                <tr key={row._id}>
                  <td component="th" scope="row">
                    {row._id}
                  </td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.salary}</td>
                  <td align="right">{row.address}</td>
                  <td align="right">{row.team}</td>
                  <td align="right">{row.gender}</td>
                  <td align="right">
                    {/* <IconButton
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
                    </Link> */}
                    <LinkContainer to={`/employee/${row._id}`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(row._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PaginateComponent
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default EmployesTable;
