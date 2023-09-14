import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function handledel() {
        props.ondelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.con}</p>
            <button onClick={handledel}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;