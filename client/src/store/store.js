import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  employeeCreateReducer,
  employeeDeleteReducer,
  employeeDetailsReducer,
  employeeListReducer,
  employeeUpdateReducer,
} from "./employeeReducer";
import { drawerReducer} from './drawerReducer'

const reducer = combineReducers({
       employeeCreate :employeeCreateReducer,
       employeeDelete: employeeDeleteReducer,
       employeeDetails: employeeDetailsReducer,
       employeeList: employeeListReducer,
       employeeUpdate: employeeUpdateReducer,    
       drawer   : drawerReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
