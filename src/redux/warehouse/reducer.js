import {
  ADD_WAREHOUSE,
  DELETE_WAREHOUSE,
  LOAD_WAREHOUSE,
  UPDATE_WAREHOUSE,
} from "./types";

const InitialState = {
  data: {},
};

const reducer = (state = InitialState, action) => {
  const { data } = state;
  switch (action.type) {
    case ADD_WAREHOUSE:
      data[`warehouse_${action.payload.id}`] = action.payload.zip_codes
        .split(",")
        .map((item) => item.trim());
      return {
        ...state,
        data,
      };
    case DELETE_WAREHOUSE:
      delete data[action.payload];
      return {
        ...state,
        data: data,
      };
    case UPDATE_WAREHOUSE:
      delete data[action.payload.previous];
      data[action.payload.id] = action.payload.zip_codes
        .split(",")
        .map((item) => item.trim());
      return {
        ...state,
        data,
      };
    case LOAD_WAREHOUSE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
