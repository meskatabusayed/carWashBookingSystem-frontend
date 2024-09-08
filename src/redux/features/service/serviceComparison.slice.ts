import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFeaturedService } from "../../../mock/service";

export interface ComparisonState {
  selectedServices: TFeaturedService[];
}

const initialState: ComparisonState = {
  selectedServices: [],
};

const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    addServiceToCompare: (state, action: PayloadAction<TFeaturedService>) => {
      if (
        !state.selectedServices.find(
          (service) => service.id === action.payload.id
        )
      ) {
        state.selectedServices.push(action.payload);
      } else {
        state.selectedServices = state.selectedServices.filter(
          (service) => service.id !== action.payload.id
        );
      }
    },
    removeServiceFromCompare: (state, action: PayloadAction<string>) => {
      state.selectedServices = state.selectedServices.filter(
        (service) => service.id !== action.payload
      );
    },
    clearComparison: (state) => {
      state.selectedServices = [];
    },
  },
});

export const {
  addServiceToCompare,
  removeServiceFromCompare,
  clearComparison,
} = comparisonSlice.actions;

export default comparisonSlice.reducer;