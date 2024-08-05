import React, {useContext} from 'react';
import NoteContext from '../context/notes/noteContext';
import AlertContext from '../context/alert/alertContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const contextAlert = useContext(AlertContext);
    const {deleteNote} = context;
    const {showAlert} = contextAlert;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="d-flex align-items-center">
                            <i className="far fa-trash-alt mx-2" style={{color: "red"}} 
                            onClick={()=>{deleteNote(note._id); showAlert("Note Deleted Successfully", "success")}}></i>
                            <i className="far fa-edit mx-2" style={{color: "blue"}} onClick={()=>{updateNote(note)}}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <span className="border rounded py-2"><span className="card-text mx-2">{note.tag}</span></span>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
