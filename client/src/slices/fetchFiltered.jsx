import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDataUnderCategory,
  fetch_data_underFilters,
} from "../Thunks/Thunks";

const initialState = {
  data2: [],
  loading2: false,
  error2: null,
  selectedColorFilter: "",
  selectedPriceFilter: '',
};

const fetchFilteredData = createSlice({
  name: "filteredData",
  initialState,
  reducers: {
    setNewData: (state, action) => {
      state.data2 = action.payload;
    },
    setselectedColorFilter:(state,action)=>{
        state.selectedColorFilter=action.payload
    },
    setselectedPriceFilter:(state,action)=>{
        state.selectedPriceFilter=action.payload
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataUnderCategory.pending, (state) => {
        state.loading2 = true;
      })
      .addCase(fetchDataUnderCategory.fulfilled, (state, action) => {
        state.loading2 = false;
        state.data2 = action.payload;
        state.error2 = null;
      })
      .addCase(fetchDataUnderCategory.rejected, (state, action) => {
        state.loading2 = false;
        state.error2 = action.error.message;
      });
    builder
      .addCase(fetch_data_underFilters.pending, (state) => {
        state.loading2 = true;
      })
      .addCase(fetch_data_underFilters.fulfilled, (state, action) => {
        state.loading2 = false;
        state.data2 = action.payload;
      })
      .addCase(fetch_data_underFilters.rejected, (state, action) => {
        state.error2 = action.error.message;
      });
  },
});
export const { setNewData,setselectedColorFilter,setselectedPriceFilter } = fetchFilteredData.actions;
export default fetchFilteredData.reducer;
