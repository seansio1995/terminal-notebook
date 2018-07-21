console.log('Starting notes.js.............');
console.log();
console.log();
const fs=require("fs");

var fetchNotes=()=>{
  try{

  var noteString=fs.readFileSync("notes-data.json");
  var notes=JSON.parse(noteString);
  return notes;
  } catch(e){
      return [];
  }

};


var saveNotes=(notes)=>{
  fs.writeFileSync("notes-data.json",JSON.stringify(notes));

};

var addNote = (title, body) => {
  var notes=fetchNotes();
  var note={
    title,
    body
  };

var duplicateNotes=notes.filter((note)=> note.title===title);
if (duplicateNotes.length===0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};

var getAll = () => {
  //console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  //console.log('Getting note', title);
  var notes=fetchNotes();
  var returnNotes=notes.filter((note)=> note.title===title);
  return returnNotes[0];
};

var removeNote = (title) => {
  var notes=fetchNotes();
  var filteredNotes=notes.filter((note)=> note.title!==title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};


var logNote=(note)=>{
  console.log('-'.repeat(20));
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);

};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
