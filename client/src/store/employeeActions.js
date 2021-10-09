import axios from "axios";

export const EMPLOYEE_LIST_REQUEST = "EMPLOYEE_LIST_REQUEST";
export const EMPLOYEE_LIST_SUCCESS = "EMPLOYEE_LIST_SUCCESS";
export const EMPLOYEE_LIST_FAIL = "EMPLOYEE_LIST_FAIL";

export const EMPLOYEE_DETAILS_REQUEST = "EMPLOYEE_DETAILS_REQUEST";
export const EMPLOYEE_DETAILS_SUCCESS = "EMPLOYEE_DETAILS_SUCCESS";
export const EMPLOYEE_DETAILS_FAIL = "EMPLOYEE_DETAILS_FAIL";

export const EMPLOYEE_DELETE_REQUEST = "EMPLOYEE_DELETE_REQUEST";
export const EMPLOYEE_DELETE_SUCCESS = "EMPLOYEE_DELETE_SUCCESS";
export const EMPLOYEE_DELETE_FAIL = "EMPLOYEE_DELETE_FAIL";

export const EMPLOYEE_CREATE_REQUEST = "EMPLOYEE_CREATE_REQUEST";
export const EMPLOYEE_CREATE_SUCCESS = "EMPLOYEE_CREATE_SUCCESS";
export const EMPLOYEE_CREATE_FAIL = "EMPLOYEE_CREATE_FAIL";
export const EMPLOYEE_CREATE_RESET = "EMPLOYEE_CREATE_RESET";

export const EMPLOYEE_UPDATE_REQUEST = "EMPLOYEE_UPDATE_REQUEST";
export const EMPLOYEE_UPDATE_SUCCESS = "EMPLOYEE_UPDATE_SUCCESS";
export const EMPLOYEE_UPDATE_FAIL = "EMPLOYEE_UPDATE_FAIL";
export const EMPLOYEE_UPDATE_RESET = "EMPLOYEE_UPDATE_RESET";

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_CREATE_REQUEST,
    });

    const { data } = await axios.post(`/employee`, employee);

    dispatch({
      type: EMPLOYEE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_UPDATE_REQUEST,
    });

    const { data } = await axios.put(`/employee/${employee._id}`, employee);

    dispatch({
      type: EMPLOYEE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const deletemployee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`/employee/${id}`);

    dispatch({
      type: EMPLOYEE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_DELETE_FAIL,
      payload: message,
    });
  }
};

export const detailEmployee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/employee/${id}`);

    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listEmployee = (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `/employee?keyword=${keyword}&pageNumber=${pageNumber}`
      );

    dispatch({
      type: EMPLOYEE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload: message,
    });
  }
};
