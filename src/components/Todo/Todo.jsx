import React, { useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/HighlightOffRounded";
import Style from "./Todo.module.css";
import { Box, IconButton, Typography } from "@mui/material";

const Todo = ({ item, index, onDelete, onEditSubmit }) => {
  const [editMode, setEditMode] = useState(false);
  const labelRef = useRef();

  const onEdit = () => {
    setEditMode(true);
    setTimeout(() => {
      labelRef.current?.focus();
    });
  };
  return (
    <Box
      className={Style.listItem}
      id={index}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex">
        <Typography
          sx={{
            height: "fit-content",
          }}
        >
          {index + 1}.
        </Typography>
        <Typography
          ref={labelRef}
          contentEditable={editMode}
          onBlur={() => {
            onEditSubmit(labelRef.current.innerText, index);
            console.log(labelRef.current.innerText);
          }}
          sx={{
            height: "fit-content",
          }}
        >
          {item}
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(index)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Todo;
