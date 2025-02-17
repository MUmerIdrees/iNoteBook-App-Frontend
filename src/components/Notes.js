import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import NoteContext from '../context/notes/noteContext';
import AlertContext from '../context/alert/alertContext';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(NoteContext);
    const contextAlert = useContext(AlertContext);
    const { notes, getNotes, editNote } = context;
    const { showAlert } = contextAlert;
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""});

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        showAlert("Note Updated Successfully", "success");
        refClose.current.click();
    }


    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }

    return (
        <>
            <AddNote />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} 
                                    onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" 
                                    value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} 
                                    onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" 
                            className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4 mx-2">
                <h2>Your Notes</h2>
                {notes.length === 0 ? <div className="mx-2">No notes to display</div> : notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })} 
            </div>
        </>
    )
}

export default Notes
