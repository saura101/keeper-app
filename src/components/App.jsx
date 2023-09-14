import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
// import notes from "../notes";
import CreateArea from "./CreateArea";



function App() {

    const [notes, setNotes] = React.useState([]);

    function passNote(note) {
        //console.log(note);
        setNotes([...notes, note]);
    }

    function deleteNote(id) {
        setNotes(() => {
          return notes.filter((note, index) => {
            return index !== id;
          });
        });
      }

    return (
        <div>
            <Header/>
            <CreateArea gettingNote={passNote}/>
            {notes.map((note,index)=> {
                return (
                    <Note 
                    title={note.title} 
                    con={note.content} 
                    key={index}
                    id={index}
                    ondelete={deleteNote}    
                    /> 
                );
            })}
            <Footer />
        </div>
    );
}

export default App;