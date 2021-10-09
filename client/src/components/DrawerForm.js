import react, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";


const DrawerForm = ({ children }) => {
  const dispatch = useDispatch();
//  const drawerToggle = useSelector((state) => state.drawerReducer);

const { drawer } = useSelector((state) => ({ ...state }));

  return (
    <Drawer
      anchor="right"
      open={drawer}
      onClose={() => {
        <Link to={`/`}/>
        dispatch({
          type: "SET_VISIBLE",
          payload: false,
        });
      }}
      variant="temporary"
    >
      {children}
    </Drawer>
  );
};

export default DrawerForm;
