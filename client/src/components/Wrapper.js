import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

const Wrapper = ({ children }) => {
  return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed="500px">{children}</Container>
    </React.Fragment>
  );
};

export default Wrapper;
