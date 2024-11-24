import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    clientName: "",
    mobileNumber: "",
    description: "",
    billingDate: "",
    address: "",
    item: "",
    quantity: "",
    billingPrice: "",
    totalPrice: "",
  },
  reducers: {
    addUser: (state, action) => {
      const {
        clientName,
        mobileNumber,
        description,
        billingDate,
        address,
        item,
        quantity,
        billingPrice,
        totalPrice,
      } = action.payload;

      state.clientName = clientName;
      state.mobileNumber = mobileNumber;
      state.description = description;
      state.billingDate = billingDate;
      state.address = address;
      state.item = item;
      state.quantity = quantity;
      state.billingPrice = billingPrice;
      state.totalPrice = totalPrice;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
