import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      state.entities.push({
        id: uuid(),
        text: action.payload
      });
    },
    todoRemoved(state, action) {
      const index = state.entities.findIndex((todo) => todo === todo.id);
      state.entities.splice(index, 1); //delete @ index, 1 element
    }
  },
});

export const { todoAdded, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
