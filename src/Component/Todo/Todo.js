import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserContext } from "../../context/userContext";
import { addTodo, deleteTodo, editTodo } from "../../Store/todoSlice";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItemId, setEditItemId] = useState(null);
  const todos = useSelector((state) => state);

  const dispatch = useDispatch();

  const { logoutUser } = useUserContext();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const addItems = () => {
    if (!inputData) {
      return;
    } else if (!toggleSubmit) {
      dispatch(
        editTodo({
          id: editItemId,
          name: inputData,
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setEditItemId(null);
    } else {
      const newItem = { id: new Date().getTime().toString(), name: inputData };
      dispatch(addTodo(newItem));
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
  };

  const editItem = (id) => {
    const itemToEdit = todos.find((item) => item.id === id);
    setInputData(itemToEdit.name);
    setToggleSubmit(false);
    setEditItemId(id);
  };

  return (
    <>
      <div className="maindiv">
        <div className="logout">
          <button onClick={logoutUser}>Log out</button>
        </div>
        <div className="task-header">
          <h1>Add Your Task's Here</h1>
        </div>
        <br />
        <div className="task-input">
          <input
            type="text"
            placeholder="Add Task here..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            ref={inputRef}
          />
          <button onClick={addItems}>{toggleSubmit ? "ADD" : "EDIT"}</button>
        </div>
        <div className="task-list">
          {todos.map((item) => (
            <div className="task-item" key={item.id}>
              <h3>
                {item.name}
                <div className="task-item-buttons">
                  <button onClick={() => editItem(item.id)}>EDIT</button>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
