import React, { useContext } from 'react';
import { NewNoteInput } from "./NewNoteInput";
import { NotesContext } from './NoteContext';
function App() {
    const {notes, removeNote} = useContext(NotesContext)
    return(
        <>
        <NewNoteInput/>
        <ul>
            {notes.map((note)=>{
                <li onClick={()=>{
                    removeNote(note.id)
                }} key={note.id}>
                    {note.text}
                </li>
            })}
        </ul>
        </>
    )
}

export default App;