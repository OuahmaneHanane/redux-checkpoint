import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../features/tasks/taskSlice';

export default function Task({ task, index}) {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editInput, setEditInput] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditSave = () => {
    if (editInput.trim()) {
      dispatch(editTask({ id: task.id, description: editInput.trim() }));
      setEditing(false);
    }
  };

  return (
    <li className="task-item">
      {/* Custom checkbox */}
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
        />
        <span className="checkmark"></span>
      </label>

      {/* Display input or text depending on edit mode */}
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editInput}
            onChange={e => setEditInput(e.target.value)}
          />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
            textDecoration: task.isDone ? 'line-through' : 'none',
            marginLeft: 10,
            marginRight: 10,
            }}
          >
          {`${index + 1}. ${task.description}`}
          </span>

          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
}
