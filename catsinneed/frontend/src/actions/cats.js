import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_CATS, DELETE_CAT, ADD_CAT, GET_ALL_CATS } from "./types";

// GET CATS
export const getCats = () => (dispatch, getState) => {
  axios
    .get("/api/cats/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CATS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET ALL CATS
export const getAllCats = () => (dispatch, getState) => {
  axios
    .get("/api/all_cats/")
    .then(res => {
      dispatch({
        type: GET_ALL_CATS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CAT
export const deleteCat = id => (dispatch, getState) => {
  axios
    .delete(`/api/cats/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteCat: "Cat Deleted" }));
      dispatch({
        type: DELETE_CAT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD CAT
export const addCat = cat => (dispatch, getState) => {
  axios
    .post("/api/cats/", cat, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCat: "Cat Added" }));
      dispatch({
        type: ADD_CAT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
