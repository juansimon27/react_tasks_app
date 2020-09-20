import React, { FormEvent, useState } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITasks {
  name: string;
  done: boolean;
}

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: ITasks[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const handleClick = (i: number) => {
    const newTasks: ITasks[] = [...tasks]
    newTasks[i].done = !newTasks[i].done
    setTasks(newTasks)
  }

  const handleDelete = (i: number) => {
    const newTasks: ITasks[] = [...tasks]
    newTasks.splice(i, 1)
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body mt-2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="New task"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                className="form-control"
                autoFocus
              />
              <button className="btn btn-success btn-block mt-2">Submit</button>
            </form>
          </div>
          {tasks.map((t: ITasks, i: number) => {
            // ( div ) will replace { return div }
            return (
              <div key={i} className="card card-body mt-2">
                <h1
                  className="col-md-auto"
                  style={{ textDecoration: t.done ? "line-through" : "" }}
                >
                  {i + 1}. {t.name}
                </h1>
                <div className="btn-group">
                  <button
                    className={t.done ? "btn btn-success" : "btn btn-warning"}
                    onClick={() => handleClick(i)}
                  >
                    {t.done ? "Pending" : "Done"}
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(i)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
