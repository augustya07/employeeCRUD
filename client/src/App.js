import AddEmployee from "./pages/AddEmployee";
import EmployesTable from "./pages/EmployesTable";
import EmployeeEdit from "./pages/EmployeeEdit";
import DrawerForm from "./components/DrawerForm";
import Wrapper from "./components/Wrapper"; 
import { Paper } from "@mui/material";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "light"
    }
  })
  return (
    <Router>
      <Route path="/add" component={AddEmployee} exact />
      <Route path="/employee/:id" component={EmployeeEdit}  exact />


      <Wrapper>
      <Route path="/" component={EmployesTable} exact />
   {/* <Route path="/employee" component={AddEmployee} exact /> */}
      {/* <DrawerForm> */}
      {/* </DrawerForm> */}
      </Wrapper>
      <Route path='/search/:keyword' component={EmployesTable} exact/>
          <Route path='/page/:pageNumber' component={EmployesTable} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={EmployesTable}
            exact
          />
    </Router>
    
  );
};

export default App;
