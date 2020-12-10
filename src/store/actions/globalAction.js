import * as types from "../types";

export const closeModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_MODALE,
  });
  return Promise.resolve();
};

export const openModal = (content) => (dispatch) => {
  dispatch({
    type: types.OPEN_MODALE,
    payload: { modal_content: content },
  });
  return Promise.resolve();
};

export const setCounts = (open_count, count) => (dispatch) => {
  dispatch({
    type: types.SET_COUNTS,
    payload: { open_count, count },
  });
  return Promise.resolve();
};

export const setFilters = (top_filter, filter_section) => (dispatch) => {
  dispatch({
    type: types.SET_FILTER,
    payload: { top_filter, filter_section },
  });
  return Promise.resolve();
};
export const setResult = (finalResult) => (dispatch) => {
  dispatch({
    type: types.SET_RESULTS,
    payload: { finalResult },
  });
  return Promise.resolve();
};

export const setTopFilter = (active_top_filter) => (dispatch) => {
  dispatch({
    type: types.SET_ACTIVE_TOP_FILTER,
    payload: { active_top_filter },
  });
  return Promise.resolve();
};

export const srtSectionFilter = (sectionFilter) => (dispatch) => {
  dispatch({
    type: types.SET_SECTION_FILTER,
    payload: { sectionFilter: sectionFilter },
  });
  return Promise.resolve();
};
