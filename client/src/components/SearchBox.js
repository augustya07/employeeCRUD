import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledSearchBar = styled.div`
display: flex;
gap: 10px;
`;

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <StyledSearchBar>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="success" className="p-2">
          <i class="fas fa-search"></i>
        </Button>
      </StyledSearchBar>
    </Form>
  );
};

export default SearchBox;
