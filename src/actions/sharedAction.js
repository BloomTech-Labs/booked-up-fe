export const SET_FILTERED_DATA = "SET_FILTERED_DATA";
export const SET_SORTED_DATA = "SET_SORTED_DATA";
export const CLEAR_FILTERED_DATA = "CLEAR_FILTERED_DATA";
export const CLEAR_SORTED_DATA = "CLEAR_SORTED_DATA";

export const setFilteredData = data => dispatch => {
  dispatch({ type: SET_FILTERED_DATA, payload: data });
};
export const setSortedData = data => dispatch => {
  dispatch({ type: SET_SORTED_DATA, payload: data });
};
export const clearFilteredData = data => dispatch => {
  dispatch({ type: CLEAR_FILTERED_DATA });
};
export const clearSortedData = data => dispatch => {
  dispatch({ type: CLEAR_SORTED_DATA });
};
