import Note from "./Note.jsx"
import AddNotes from "./addNotes.jsx";
const NotesList =({notes, handleAddNote})=>
{
    return(
       <div className = "NotesList">
       {
        notes.map((note)=> (<Note
        id = {note.id}
        text = {note.text}
        date = {note.date}
        />)
       )}
       <AddNotes handleAddNote = {handleAddNote}/>
       </div>
    )
}

export default NotesList;