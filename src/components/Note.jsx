import {MdDeleteForever} from 'react-icons/md';
import { ReactDOM } from 'react';
const Note = ({id,text,date}) =>
{
    return(
        <div className="Note">
           <span>{text}</span> 
            <div className="notes-footer">
                <small>{date}</small>
                <MdDeleteForever className = "delete-icon" size = "1.3em"></MdDeleteForever>
            </div>
        </div>
    );
};

export default Note