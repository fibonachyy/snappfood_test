import * as types from "../types";
const initialState = {
  modal_state: false,
  modal_content: "filter",
  open_count: null,
  count: null,
  finalResult: [],
  top_filters: [],
  filter_section: [],
  active_top_filter: "",
};
export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODALE:
      const { modal_content } = action.payload;
      return { ...state, modal_content, modal_state: true };
    case types.CLOSE_MODALE:
      return { ...state, modal_content: null, modal_state: false };

    case types.SET_COUNTS:
      const { open_count, count } = action.payload;
      return { ...state, count, open_count };

    case types.SET_FILTER:
      const { top_filter, filter_section } = action.payload;
      return {
        ...state,
        top_filters: [...top_filter],
        filter_section: [...filter_section],
      };

    case types.SET_ACTIVE_TOP_FILTER:
      const { active_top_filter } = action.payload;
      const filterListChnaged = state.top_filters.map((filter) => {
        if (filter.value === active_top_filter) filter.selected = true;
        else filter.selected = false;
        return filter;
      });
      return {
        ...state,
        top_filters: [...filterListChnaged],
      };
    case types.SET_SECTION_FILTER:
      const { sectionFilter } = action.payload;
      return {
        ...state,
        filter_section: [...sectionFilter],
      };

    case types.SET_RESULTS:
      const { finalResult } = action.payload;
      const resultList = finalResult.reduce((prevData, currentData) => {
        const checkExsistItem = state.finalResult.filter(
          (item) => currentData.data.id === item.data.id
        );
        if (!checkExsistItem) return [...prevData, currentData];
        else return [];
      }, []);
      return { ...state, finalResult: [...finalResult, ...resultList] };

    default:
      return state;
  }
};
