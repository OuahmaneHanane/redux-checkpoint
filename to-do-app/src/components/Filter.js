import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasks.filter);

  return (
    <div className='filter'>
      <span>Filter: </span>
      <button
        onClick={() => dispatch(setFilter('all'))}
        disabled={filter === 'all'}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('done'))}
        disabled={filter === 'done'}
      >
        Done
      </button>
      <button
        onClick={() => dispatch(setFilter('not_done'))}
        disabled={filter === 'not_done'}
      >
        Not Done
      </button>
    </div>
  );
}