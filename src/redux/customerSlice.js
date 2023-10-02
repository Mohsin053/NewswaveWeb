import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  data: {},
};

export const customerSlice = createSlice({
  name: "customerslider",
  initialState,
  reducers: {
    toggleCustomer: (state) => {
      state.value = !state.value;
    },
    setCustomer: (state, action) => {
      state.value = action.payload;
    },
    setCustomerData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, setCustomer, setCustomerData } = customerSlice.actions;

export default customerSlice.reducer;
