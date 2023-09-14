import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note,setNote] = React.useState({
        title : "",
        content : ""
    });

    const [exp, setExp] = React.useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote({
            ...note,
            [name] : value
        })
    }

    function expand() {
      setExp(true);
    }

  return (
    <div>
      <form className="create-note" onSubmit={(event) => {
        // console.log(note);
        props.gettingNote(note);
        setNote({
            title: "",
            content: ""
          });
          setExp(false);
        event.preventDefault();
      }}>
        {exp &&<input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={exp?"3":"1"} value={note.content}/>
        <Zoom in={exp} >
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

