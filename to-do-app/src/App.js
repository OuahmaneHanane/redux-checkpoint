import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';
import'./App.css';

export default function App() {
  return (
    <div className='container'>
      <h1> To-Do App</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}