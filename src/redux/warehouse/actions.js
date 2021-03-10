import {
  ADD_WAREHOUSE,
  DELETE_WAREHOUSE,
  LOAD_WAREHOUSE,
  UPDATE_WAREHOUSE,
} from "./types";

export const LoadWarehouses = (payload) => ({
  type: LOAD_WAREHOUSE,
  payload,
});

export const AddWarehouse = (payload) => ({
  type: ADD_WAREHOUSE,
  payload,
});

export const DeleteWarehouse = (payload) => ({
  type: DELETE_WAREHOUSE,
  payload,
});

export const UpdateWarehouse = (payload) => ({
  type: UPDATE_WAREHOUSE,
  payload,
});
