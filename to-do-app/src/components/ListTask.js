import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

export default function ListTask() {
  const { tasks, filter } = useSelector(state => state.tasks);

  // Filter tasks based on filter state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true;
  });

  return (
    <ul>
      {/* Render each task */}
      {filteredTasks.map((task, index) => (
  <Task key={task.id} task={task} index={index} />
   ))}

      {filteredTasks.length === 0 && <li>No tasks found</li>}
    </ul>
  );
}