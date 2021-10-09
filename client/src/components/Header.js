import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { Route } from 'react-router-dom'


const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 80px;
  margin-bottom:  70px;
  background-color: #E6E6FA;
  padding: 10px 25px;
  border-radius: 20px;


`;

const Header = () => {
  const dispatch = useDispatch();

  const employeCreateHandler = () => {
    dispatch({
      type: "SET_VISIBLE",
      payload: true,
    });
  };
  return (
    <div>
      <StyledHeader>

        <p style={{ fontSize:'18px'}}>Employe Managment  </p>
        <Route render={({ history }) => <SearchBox history={history} />} />
      <Link to={`/add`}>  
        <Button
          variant="contained"
          color="secondary"
          onClick={employeCreateHandler}
        >
          New
        </Button>
      </Link>
      </StyledHeader>
    </div>
  );
};

export default Header;
