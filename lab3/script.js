class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');                 // created <div>
    newNote.setAttribute("class", "card");                       // <div class="card">

    let newP = document.createElement('p');                      //<p>ToDo</p>
    newP.innerHTML = title;

    newNote.appendChild(newP);                                  // <div class="card"> <p> To do</p>
    
    //samengewerkt in de klas met Hannah De Wachter
    let newA = document.createElement('a');                     //created <a></a>
    newA.setAttribute("class", "card-remove");                  //<a> gets a class named card-remove
    newA.innerHTML = "Remove";
    newNote.appendChild(newA);                                  //added remove option to newNote
    newA.addEventListener('click', this.remove.bind(newNote));  
    
    return newNote;
  }
  
  add(){

    document.querySelector(".notes").appendChild(this.element); //filled in a new To do? Enter and append to the list
    
    // HINT🤩
    // this function should append the note to the screen somehow
  }
  
  saveToStorage(){
    //store notes into a variable
    let saveNotes = JSON.parse(localStorage.getItem("noteItems"))  || []; 
    saveNotes.push(this.title); 
    localStorage.setItem("noteItems", JSON.stringify(saveNotes));
      

  
  
    
    // HINT🤩

    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    this.remove();
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));

    this.enter = document.querySelector('input');
    this.enter.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.querySelector("#btnAddNote").click();
      }
    });
    this.loadNotesFromStorage();
    
  }
   
  
  
  loadNotesFromStorage() {

    //get the value of the storage item
    
    //document.querySelector(".notes").innerHTML = storedNote; 

 
  
    
    
  


    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let text = document.querySelector("#txtAddNote").value;
    // HINT🤩
    let note = new Note(text);
    note.add();
    note.saveToStorage();
    
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();