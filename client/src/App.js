import AddEmployee from "./pages/AddEmployee";
import EmployesTable from "./pages/EmployesTable";
import EmployeeEdit from "./pages/EmployeeEdit";
import { Container } from "react-bootstrap";

import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
            <main className='py-3'>
        <Container>
      {/* <Route path="/add" component={AddEmployee} exact /> */}
      <Route path="/employee/:id" component={EmployeeEdit} exact />

      <Route path="/" component={EmployesTable} exact />
      <Route path="/add" component={AddEmployee} exact />
      {/* <DrawerForm> */}
      {/* </DrawerForm> */}
      <Route path="/search/:keyword" component={EmployesTable} exact />
      <Route path="/page/:pageNumber" component={EmployesTable} exact />
      <Route
        path="/search/:keyword/page/:pageNumber"
        component={EmployesTable}
        exact
      />
      </Container>
      </main>
    </Router>
  );
};

export default App;
