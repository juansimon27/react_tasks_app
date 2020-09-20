import React, {FormEvent, useState} from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css'

type FormElement = React.FormEvent<HTMLFormElement>

interface ITasks {
  name: string;
  done: boolean;
}

function App() {

  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITasks[]>([])

  const handleSubmit = (event: FormElement) => {
    event.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  const addTask = (name: string) => {
    const newTasks: ITasks[] = [...tasks, {name, done: false}]
    setTasks(newTasks)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New task" onChange={e => setNewTask(e.target.value)} value={newTask}/>
        <button className='btn btn-success ml-2'>
          Submit
        </button>
      </form>
      
      {
        tasks.map((t: ITasks, i: number) => {
          return <div key={i} className='card-body'>
            <h1 className='card-title'>{t.name}</h1>
            <p className='card-text'>{'' + t.done}</p>
          </div>
        })
      }
    </div>
  );
}

export default App;
