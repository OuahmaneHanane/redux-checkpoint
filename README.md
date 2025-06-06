# redux-checkpoint

This is a simple and clean **ToDo Application** built with **React** and **Redux**. It demonstrates how to manage global state using Redux and Redux Toolkit while applying key concepts such as:

- Adding tasks
- Editing tasks
- Marking tasks as done/not done
- Filtering tasks based on completion
- Styling and component-based architecture

---

##  Project Structure

src/
├── components/
│ ├── AddTask.js # Component to add new tasks
│ ├── ListTask.js # Component to list tasks
│ ├── Task.js # Component for individual task     with edit/check features
│ └── Filter.js # Component to filter tasks by status (done/not done)
├── features/
│ └── tasks/
│    └── taskSlice.js # Redux slice containing reducers & actions
├── App.js
├── index.js
└── App.css # App styling
└── store.js # Configures Redux store

---

##  Features Implemented

-  **Add Task**: Input a task and add it to the list.
-  **Edit Task**: Modify the task description.
-  **Toggle Done**: Mark a task as completed or not.
-  **Filter Tasks**: View tasks that are either:
  - All
  - Done
  - Not Done
-  **Task Numbering**: Each task is numbered dynamically.
-  **Visual Feedback**: Completed tasks have line-through styling.
-  **Custom Styling**: Styled with a responsive and creative layout.

---

##  Tech Stack

- React
- Redux Toolkit
- React Redux (Hooks: `useSelector`, `useDispatch`)
- CSS

---

##  How to Run

1. **Clone the project**:
   
   git clone https://github.com/OuahmaneHanane/redux-checkpoint.git

2. **Install dependencies**:
npm install

3. **Run the app**:

npm start

## Learning Objectives

**This project demonstrates**:

Proper use of Redux Toolkit to manage global state.

Clean component structure and state flow.

Handling actions and reducers correctly (add, edit, toggle).

Using useSelector, useDispatch hooks effectively.

Conditional rendering and event handling in React.

## Author's Notes
The logic avoids direct state mutation using Redux best practices.

Useful comments have been added across components to aid understanding.

Ideal for students learning Redux in a React environment.








