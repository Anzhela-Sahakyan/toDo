import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function TodoList({ text }) {
  return (
    <Card>
      <Typography variant="h4" component="h2">
        {text}
      </Typography>
      <br />
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => alert("ajd")}
        >
          Add
        </Button>
        <Button variant="contained" color="info" onClick={() => alert("ajd")}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={() => alert("ajd")}>
          Delete
        </Button>
      </div>
    </Card>
  );
}
