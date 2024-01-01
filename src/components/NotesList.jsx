import Note from "./Note.jsx"
import AddNotes from "./addNotes.jsx";
const NotesList =({notes})=>
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
       <AddNotes/>
       </div>
    )
}

export default NotesList;