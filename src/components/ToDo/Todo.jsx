import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import Style from "./Todo.module.css";

export default function Todo() {
  const [inputValue, setInputValue] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setIsInputEmpty(value === "");
  };
  const handleClick = () => {
    const newChild = inputRef.current.value;
    setInputValue((prevValue) => [...prevValue, newChild]);
    inputRef.current.value = "";
    setIsInputEmpty(true);
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Tasks"
        variant="outlined"
        inputRef={inputRef}
        className={Style.inputField}
        onChange={handleChange}
      />
      <div className={Style.btnContainer}>
        <Button
          className={Style.btn}
          variant="contained"
          color="success"
          onClick={handleClick}
          disabled={isInputEmpty}
        >
          Add
        </Button>
        <Button
          className={Style.btn}
          variant="contained"
          color="info"
          onClick={() => alert("ajd")}
        >
          Edit
        </Button>
        <Button
          className={Style.btn}
          variant="contained"
          color="error"
          onClick={() => alert("ajd")}
        >
          Delete
        </Button>
      </div>
      <div className={Style.listItemsWrapper}>
        {inputValue.map((item, index) => (
          <div className={Style.listItem}>{`${index + 1}. ${item}`}</div>
        ))}
      </div>
    </>
  );
}
