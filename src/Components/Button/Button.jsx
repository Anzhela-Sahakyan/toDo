import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from'./Button.module.css'

export default function BasicButtons() {
  return (
    <Stack className={styles.stack} spacing={2} direction="row">
      <Button variant="contained" style={{"backgroundColor": "green"}}>Add</Button>
      <Button variant="contained" style={{"backgroundColor": "yellow"}}>Edit</Button>
      <Button variant="contained" style={{"backgroundColor": "red"}}>Delete</Button>
    </Stack>
  );
}
