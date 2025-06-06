import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';

export default function AddTask() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input.trim()));
      setInput('');
    }
  };

  return (
    <div className='add-task'>
      {/* Input to type new task */}
      <input
        type="text"
        placeholder="New task description"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {/* Button to add the task */}
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}