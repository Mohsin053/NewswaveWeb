import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import skooperReducer from "./SkooperSlice";
import restaurantReducer from "./restaurantSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    skooper: skooperReducer,
    restaurant: restaurantReducer,
    user: userReducer,
  },
});
