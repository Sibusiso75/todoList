import React, { useState, useRef, useEffect } from "react";
import {
  FaTrash,
  FaEdit,
  FaPlus,
  FaLaptop,
  FaMobile,
  FaTablet,
} from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import "./todolist.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [removeAlert, setRemoveAlert] = useState(false);
  const [addAlert, setAddAlert] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [input, setInput] = useState(false);
  const inputValue = useRef(null);

  const remove = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setRemoveAlert(true);
    setTimeout(() => {
      setRemoveAlert(false);
    }, 1000);
  };
  function yesButton(){
    setItems([])
    setAlert(!alert)
  }

  const handleCheck = (id) => {
    const completed = items.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setItems(completed);
  };
  const edit = (id) => {
    const specificName = items.find((item) => item.id === id);
    setEditID(id);
    setEditing(!editing);
    setAlert(false);
    setName(specificName.name);
  };

  const submit = (e) => {
    e.preventDefault();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getMinutes();

    const time = hours + minutes + seconds;

    if (name !== "" && editing === false) {
      const newitem = {
        id: time / Math.random() + name[0] + (items.length + 1),
        name,
        checked: false,
      };
      setItems([...items, newitem]);

      setName("");
      inputValue.current.value = "";
      setAddAlert(true);

      setTimeout(() => {
        setAddAlert(false);
      }, 1000);
    } else if (name !== "" && editing) {
      setItems(
        items.map((item) => {
          if (editID === item.id) {
            return { ...item, name };
          }
          return item;
        })
      );``
      setEditing(false);
      setName("");
      inputValue.current.value = "";
      setEditID(null);
    } else {
      setInput(true);
      setTimeout(() => {
        setInput(false);
      }, 2000);
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);
  return (
    <div className="laptop">
      <FaLaptop className="showLaptop" />

      <FaMobile className="showMobile" />

      <FaTablet className="showTablet" />

      <h3>To-do List</h3>

      {input && (
        <h4
          style={{
            color: "red",
            background: "#f5f5f5",
            paddingLeft: "5px",
          }}
        >
          Please enter a value
        </h4>
      )}
      {removeAlert && (
        <p
          style={{
            color: "white",
            background: "rgba(244, 53, 53, 0.583)",
            paddingLeft: "5px",
          }}
        >
          task has been removed
        </p>
      )}

      <h4>
        <span>
          <FaTasks />
        </span>{" "}
        {items.length === 1
          ? items.length + " task "
          : items.length + " tasks "}
      </h4>
      {addAlert && (
        <p
          style={{
            color: "green",
            background: "lightgreen",
            paddingLeft: "5px",
          }}
        >
          task has been added
        </p>
      )}

      <form onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a task..."
          ref={inputValue}
        />
        <button type="submit" className="submit">
          <FaPlus />
        </button>
      </form>
      <p></p>

      <p></p>
      <ol>
        {items.map((item) => {
          return (
            <div key={item.id} style={{ border: "none" }}>
              {editing && item.id === editID && (
                <div>
                  <form onSubmit={submit}>
                    <textarea
                      value={name || ""}
                      id=""
                      placeholder="type a message..."
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        padding: "10px",
                      }}
                    ></textarea>

                    <button type="submit">Edit</button>
                  </form>
                </div>
              )}

              {items.length > 0 && (
                <div>
                  <li>
                    <span
                      style={{
                        textDecoration:
                          item.checked === true ? "line-through" : "none",
                      }}
                    >
                      {item.name}
                    </span>

                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheck(item.id)}
                    />

                    <FaEdit onClick={() => edit(item.id)} className="edit" />

                    <FaTrash
                      onClick={() => remove(item.id)}
                      className="faTrash"
                    />
                    <hr />
                  </li>
                </div>
             
              )}
              
            </div>
          );
        })}
        {alert && (
                <div className="alert">
                  <p className="question">
                    Are you sure you want to remove all tasks?
                    <button onClick={yesButton} className="yes">
                      Yes
                    </button>
                    <button onClick={() => setAlert(!alert)} className="no">
                      No
                    </button>
                  </p>
                </div>
              )}
        <br />
        <br />

        {items.length > 1 && (
          <button
            onClick={() => setAlert(!alert)}
            style={{ background: "orange", color: "blue" }}
          >
            clear all
          </button>
        )}
      </ol>
    </div>
  );
};
export default App;
