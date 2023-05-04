import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const SavedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.savedItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.savedItems.push({
          id: newItem.id,
          courseName: newItem.courseName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.savedItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity), 0
      );

      //   console.log(state.totalQuantity);
      //   console.log(state.savedItems);
      //   console.log(newItem);
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.savedItems.find((item) => item.id === id);
  
      if (existingItem) {
        state.savedItems = state.savedItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
  
      state.totalAmount = state.savedItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity), 0
      );
    },
  },

  // Tạo chức năng xóa khóa học đã lưu
  
});

export const savedActions = SavedSlice.actions;

export default SavedSlice.reducer;
