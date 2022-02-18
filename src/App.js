import React, { useState, useEffect, useRef } from 'react';
import Alert from './Alert';

const App = () => {
  const taskEl = useRef(null);
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    message: '',
    type: '',
    show: false,
  });
<<<<<<< HEAD

  useEffect(() => {
    const list =
      JSON.parse(localStorage.getItem('list')).length === 0
        ? []
        : JSON.parse(localStorage.getItem('list'));
    setList(list);
  }, []);

  useEffect(() => {
    taskEl.current.focus();
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

=======
>>>>>>> 3d9038ff88046fc48d544b7e2f7b3810c3483dd4
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && edit) {
      const newList = list.map((item) => {
        if (item.id === editID) {
          item.title = task;
        }
        return item;
      });
      setList(newList);
      setEdit(false);
      setEditID(null);
      setTask('');
      showAlert('Task has been edited', 'success', true);
      return;
    }
    if (task) {
      const newTask = { title: task, id: new Date().getTime().toString() };
      setList([...list, newTask]);
      showAlert('task has been added', 'success', true);
      setTask('');
      return;
    }

    showAlert('text field is empty', 'danger', true);
  };
<<<<<<< HEAD

  const showAlert = (message = '', type = '', show = false) => {
    return setAlert({ message, type, show });
  };

  const completeTask = (e, id) => {
    e.preventDefault();
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, tag: 'complete' };
      }
      return task;
    });
    setList(newList);
    e.target.parentElement.firstChild.classList.add('strikethrough');
    showAlert('task has been completed', 'success', true);
  };
  const incompleteTask = (e, id) => {
    e.preventDefault();
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, tag: '' };
      }
      return task;
    });
    setList(newList);
    e.target.parentElement.firstChild.classList.remove('strikethrough');
    showAlert('task is incompleted', 'success', true);
  };
  const deleteTask = (id) => {
    setList((oldList) => {
      const newList = oldList.filter((task) => task.id !== id);
=======
  const showAlert = (message = '', type = '', show = false) => {
    return setAlert({ message, type, show });
  };
  useEffect(() => {
    taskEl.current.focus();
    const list =
      JSON.parse(localStorage.getItem('list')).length === 0
        ? []
        : JSON.parse(localStorage.getItem('list'));
    setList(list);
  }, []);
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const completeTask = (e) => {
    e.preventDefault();
    e.target.parentElement.firstChild.classList.add('strikethrough');
    showAlert('task has been completed', 'success', true);
  };
  const deleteTask = (id) => {
    setList((oldList) => {
      const newList = list.filter((task) => task.id !== id);
>>>>>>> 3d9038ff88046fc48d544b7e2f7b3810c3483dd4
      return newList;
    });
    showAlert('task has been removed', 'success', true);
  };
  const editTask = (id) => {
    const editedTask = list.find((task) => task.id === id);
    setEdit(true);
    setTask(editedTask.title);
    setEditID(id);
  };
  const clearList = () => {
    setList([]);
    showAlert('Tasks has been cleared', 'danger', true);
  };
  return (
    <div className="container">
      <article>
        <form className="form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert removeAlert={showAlert} {...alert} list={list} />
          )}
          <div className="form-control">
            <label htmlFor="firstName">Task: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              ref={taskEl}
            />
          </div>

          <button type="submit">add task</button>
        </form>
      </article>
      {list.length > 0 && (
        <>
<<<<<<< HEAD
          {list.map((task) => {
            const { title, id, tag } = task;
            return (
              <div className="item" key={id}>
                <h4
                  className={`${tag === 'complete' ? 'strikethrough' : null}`}
                >
                  {title}
                </h4>
                <button onClick={() => editTask(id)}>edit</button>
                <button onClick={() => deleteTask(id)}>delete</button>
                <button onClick={(e) => completeTask(e, id)}>complete</button>
                <button onClick={(e) => incompleteTask(e, id)}>
                  incomplete
                </button>
=======
          {list.map(({ title, id }) => {
            return (
              <div className="item" key={id}>
                <h4>{title}</h4>
                <button onClick={() => editTask(id)}>edit</button>
                <button onClick={() => deleteTask(id)}>delete</button>
                <button onClick={completeTask}>complete</button>
>>>>>>> 3d9038ff88046fc48d544b7e2f7b3810c3483dd4
              </div>
            );
          })}
          <button type="button" className="btn" onClick={clearList}>
            clear all
          </button>
        </>
      )}
    </div>
  );
};
export default App;
