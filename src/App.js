import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Task from './components/Task';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'First task',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Second task',
      day: 'Feb 5th at 3:30pm',
      reminder: false
    }
  ]);

  // delete task
  const deleteTask = (id) => {
    console.log('delete' + id);
    setTasks(tasks.filter((task) => (task.id !== id)));
  }

  // toggle reminder
  const toggleReminder = (id) => {
    console.log('toggle' + id);
    setTasks(tasks.map((task) =>
      (task.id === id) ? { ...task, reminder: !task.reminder } : task
    ));
  }

  // add task
  const addTask = (task) => {
    console.log('addTask' + task);
    console.log(Math.random());
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}



export default App;
