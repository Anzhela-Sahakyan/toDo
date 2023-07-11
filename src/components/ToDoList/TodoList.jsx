import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import Style from "./TodoList.module.css";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function onEditSubmit(text, index) {
    setTodos(todos.map((todo, i) => (i === index ? text : todo)));
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hadnleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevValue) => [...prevValue, inputValue]);
    setInputValue("");
  };
  return (
    <form onSubmit={hadnleSubmit}>
      <TextField
        id="outlined-basic"
        label="Tasks"
        variant="outlined"
        className={Style.inputField}
        onChange={handleChange}
        value={inputValue}
      />

      <div className={Style.btnContainer}>
        <Button
          className={Style.btn}
          type="submit"
          variant="contained"
          color="success"
          disabled={!inputValue}
        >
          Add
        </Button>
      </div>
      <div className={Style.listItemsWrapper}>
        {todos.map((item, index) => (
          <Todo
            onDelete={removeTodo}
            onEditSubmit={onEditSubmit}
            key={item}
            item={item}
            index={index}
          />
        ))}
      </div>
    </form>
  );
}
