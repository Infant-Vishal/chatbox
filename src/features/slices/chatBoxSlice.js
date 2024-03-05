import { createSlice } from "@reduxjs/toolkit";
import { contactData } from "../../data/contactData";
import { chatData } from "../../data/chatData";
console.log(contactData)
export const contactSlice = createSlice({
  
  name: "contact",
  initialState: {
    contacts: contactData,
    chats: chatData,
  },
  reducers: {},
});

export default contactSlice.reducer;
