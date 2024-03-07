import { createSlice, nanoid } from "@reduxjs/toolkit";
import { contactData } from "../../data/contactData";
import { chatData } from "../../data/chatData";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: contactData,
    chats: chatData,
    currentContact: contactData[0],
  },
  reducers: {
    alterCurrentChat: (state, action) => {
      state.currentContact = action.payload;

      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index].unreadCount = 0;
      }
    },

    addChatObj: (state, action) => {
      const addObj = {
        id: nanoid(),
        ...action.payload,
      };
      state.chats.push(addObj);
    },
  },
});

export const { alterCurrentChat, addChatObj } = contactSlice.actions;

export default contactSlice.reducer;
