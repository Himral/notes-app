import { useState } from "react";

const AddNotes =({handleAddNote}) =>{
    const [noteText,setNoteText] = useState('');
    const handleChange=(event)=>{
        setNoteText(event.target.value);
    };

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
             handleAddNote(noteText);
             setNoteText('');
        }
       else{
        alert("you need to add a valid string to save a note")
       }
    }
    return(
        
            <div className="Note new">
                <textarea
                rows = "8"
                cols = "10"
                placeholder="Type text to add"
                value = {noteText}
                onChange={handleChange}
                >

                </textarea>
                <div className="notes-footer">
                    <small>200 remaining</small>
                    <button 
                    className="save"
                    onClick={handleSaveClick}
                    >Save</button>
                </div>
            </div>
        
    )
}

export default AddNotes;