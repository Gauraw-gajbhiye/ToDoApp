import { useState } from 'react';
import './App.css';
import FilterButton from './Component/FilterButton';
import Form from './Component/Form';
import ToDo from './Component/ToDo';


function App(props) {

  const [task, setTask] = useState(props.tasks)
  const taskList = task?.map((task) => (
    <ToDo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  function addTask(name) {
    // alert(name);
    const newTask = { id: Math.random(), name, completed: false }
    setTask([...task, newTask])
  }


  function deleteTask(id) {
    const removeTask = task.filter((task) => id !== task.id)
    setTask(removeTask)
  }

  function editTask(id, newname) {

    const edittask = task.map((task) => {
      if (id === task.id) {
        return { ...task, name: newname };
      }
      return task
    });
    setTask(edittask)
  }

  const headingText = `${taskList.length} task remaining`
  return (

    <div className='border-2 border-black text-center'>
      <h1 className='font-bold text-3xl'>To do Matic</h1>
      <Form addTask={addTask} />

      {/* <FilterButton /> */}
      {/* <FilterButton /> */}
      {/* <FilterButton /> */}
      <hr className='border-2 border-black' />
      <h3 className='font-bold text-lg'>{headingText}</h3>
      <ul>
        <li>
          {taskList}
        </li>

      </ul>


    </div>
  );
}

export default App;
