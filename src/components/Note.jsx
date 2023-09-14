import React from "react";

function Note(props) {

    function handledel() {
        props.ondelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.con}</p>
            <button onClick={handledel}>DELETE</button>
        </div>
    );
}

export default Note;