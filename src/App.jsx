import NotesList from "./components/NotesList"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from 'react';
import {nanoid} from 'nanoid';
import Search from "./components/Search";
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
    date : getDate()
  },{
    id : nanoid(),
    text: "This is my Second note",
    date : getDate()
  }]);
const [searchText, setSearchText] = useState('');
  const addNote= (text) =>{
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
  return (
   <div className="App">
      <Header/>
      <Search handleSearchNote={setSearchText} />
      <NotesList 
      notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
      handleAddNote = {addNote}
      handleDeleteNote={deleteNote}
      />
      <Footer/>
   </div>
  )
}

export default App
