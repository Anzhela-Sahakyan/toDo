import "./App.css";
import * as React from 'react';
import BasicTextFields from "./Components/BasicTextFields/BasicTextFields";
import Button from './Components/Button/Button'
import ListItem from './Components/ListItem/ListItem'
import Date from './Components/Date/Date'

function App() {
  return <div className="App">
    <Date />
    <BasicTextFields/>
    <ul className="ul">
      <ListItem item="15:00-16:00 - B1 Class with Inessa"/>
      <ListItem item="16:00-18:00 - Watch 'React Intro for Beginners'"/>
      <ListItem item="18:00-19:00 - Relax"/>
      <ListItem item="19:00-19:30 - Check Sam's Reading Fluency and Comprehension"/>
    </ul>
    <Button />
    </div>
}

export default App;
