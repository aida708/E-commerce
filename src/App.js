import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
`;
const Container = styled.h5`
  background: red;
  color: black;
  border: 1rem;

  .w {
    font-size: 6rem;
    color: blue;
  }
`;

function App() {
  return (
    <div>
      <Button>click me</Button>
      <h4>comfy sloth starter</h4>
      <Container>
        <button className="w">kliko</button>
        <h5>Hello Aida</h5>
      </Container>
    </div>
  );
}

export default App;
