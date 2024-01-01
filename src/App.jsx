import NotesList from "./components/NotesList"
import {useState} from 'react';
import {nanoid} from 'nanoid';
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1; 
  const year = today.getFullYear();
  const date = today.getDate();
  
  return `${month}/${date}/${year}`;
}

function App() {
  const [notes, setNotes] = useState([{
    id : nanoid(),
    text: "This is my first note",
    date : 12/12/31
  },{
    id : nanoid(),
    text: "This is my first note",
    date : getDate()
  },{
    id : nanoid(),
    text: "This is my first note",
    date : getDate()
  },{
    id : nanoid(),
    text: "Tnote",
    date : getDate()
  }]);
  return (
   <div className="container">
      <NotesList notes ={notes}/>
   </div>
  )
}

export default App
