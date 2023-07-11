import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/HighlightOffRounded";
import Style from "./Todo.module.css";
import { Box, IconButton } from "@mui/material";

const Todo = ({ item, index, onDelete }) => {
  return (
    <Box
      className={Style.listItem}
      id={index}
      display="flex"
      justifyContent="space-between"
    >
      {`${index + 1}. ${item}`}
      <Box>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={onDelete} color="error" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Todo;
