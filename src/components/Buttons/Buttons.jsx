import { Button } from "@mui/material";

export default function Buttons() {
  return (
    <div>
      <Button variant="contained" color="success" onClick={() => alert("ajd")}>
        Add
      </Button>
      <Button variant="contained" color="info" onClick={() => alert("ajd")}>
        Edit
      </Button>
      <Button variant="contained" color="error" onClick={() => alert("ajd")}>
        Delete
      </Button>
    </div>
  );
}
