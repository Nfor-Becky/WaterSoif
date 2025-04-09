import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
  inventoryItems: [],
  },
  reducers: {
    addInventoryItem(state, action) {
      state.inventoryItems.push(action.payload);
    },
    updateInventory(state, action) {
      const index = state.inventoryItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.inventoryItems[index] = action.payload;
      }
    },
    deleteInventoryItem(state, action) {
      state.inventoryItems = state.inventoryItems.filter(item => item.id !== action.payload);
    },
    clearInventoryItems(state) {
      state.inventoryItems = [];
    },
  },
});

// Export actions
export const {
  addInventoryItem,
  updateInventory,
  deleteInventoryItem,
  clearInventoryItems,
} = appSlice.actions;

// Export reducer
export default appSlice.reducer;