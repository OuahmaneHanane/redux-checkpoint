import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: nanoid(), description: 'Sample Task 1', isDone: false },
    { id: nanoid(), description: 'Sample Task 2', isDone: true }
  ],
  filter: 'all' // 'all', 'done', 'not_done'
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(description) {
        return { payload: { id: nanoid(), description, isDone: false } };
      }
    },
   toggleTask: (state, action) => {
  const task = state.tasks.find(t => t.id === action.payload);
  if (task) {
    task.isDone = !task.isDone; // This is OK with Redux Toolkit
  }
},
    editTask(state, action) {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.description = description;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;