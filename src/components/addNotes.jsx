import { useState } from "react";

const AddNotes =() =>{
    const [noteText,setNoteText] = useState('');
    const handleChange=(event)=>{
        setNoteText(event.target.value);
    };

    const handleSaveClick = () =>{
        
    }
    return(
        
            <div className="Note new">
                <textarea
                rows = "8"
                cols = "10"
                placeholder="Type text to add"
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