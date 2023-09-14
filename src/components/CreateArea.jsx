import React from "react";

function CreateArea(props) {

    const [note,setNote] = React.useState({
        title : "",
        content : ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote({
            ...note,
            [name] : value
        })
    }

  return (
    <div>
      <form onSubmit={(event) => {
        // console.log(note);
        props.gettingNote(note);
        event.preventDefault();
        setNote({
            title: "",
            content: ""
          });
      }}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

