export const SET_FILTERED_DATA = "SET_FILTERED_DATA";
export const SET_SORTED_DATA = "SET_SORTED_DATA";
export const CLEAR_FILTERED_DATA = "CLEAR_FILTERED_DATA";
export const CLEAR_SORTED_DATA = "CLEAR_SORTED_DATA";

export const setFilteredData = data => dispatch => {
  console.log("NL: sharedAction.js: setFilteredData: Line 7: data: ", data);
  dispatch({ type: SET_FILTERED_DATA, payload: data });
};
export const setSortedData = data => dispatch => {
  console.log("NL: sharedAction.js: setSortedData: Line 11: data: ", data);
  dispatch({ type: SET_SORTED_DATA, payload: data });
};
export const clearFilteredData = () => dispatch => {
  console.log(
    "NL: sharedAction.js: clearFilteredData: Line 15: Inside clear function"
  );
  dispatch({ type: CLEAR_FILTERED_DATA });
};
export const clearSortedData = () => dispatch => {
  console.log(
    "NL: sharedAction.js: clearSortedData: Line 19: Inside clear function"
  );
  dispatch({ type: CLEAR_SORTED_DATA });
};
