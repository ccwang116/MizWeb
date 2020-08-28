import React, { createContext, useState } from 'react';

export const NotesContext = createContext({notes:[{text:"Hello",id:"0"}]})
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    const addNote = (text) => {
        setNotes([...notes, { text, id: nanoid() }])
    }
    const removeNote = (id) =>{
        setNotes(notes.filter(note=>{note.id!==id}))
    }
    return<NotesContext.Provider value={{notes,addNote,removeNote}}>
        {children}
    </NotesContext.Provider>
}