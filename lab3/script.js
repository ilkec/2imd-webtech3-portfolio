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
    let saveNotes = JSON.parse(localStorage.getItem("storedItems"))  || []; 
    saveNotes.push(this.title); 
    localStorage.setItem("storedItems", JSON.stringify(saveNotes));
    
    // HINT🤩

    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    
    this.remove(); //removes note in the app

    //gemaakt met voorbeeld via https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    //en via https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    let storedNotesRemove = JSON.parse(localStorage.getItem("storedItems"));
    //console.log(storedNotesRemove);
    let todo = document.querySelector("p").innerHTML;                       //need to get what is in the p tag to put into the splice
    const storedIndex = storedNotesRemove.indexOf(todo);
    console.log(storedIndex);
    storedNotesRemove.splice(storedIndex, 1);
    
    localStorage.setItem("storedItems", JSON.stringify(storedNotesRemove));
    
  

    
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
    //for each item in that storage, make a new note and add it to the to do list

    // gewerkt met voorbeeld van leerkracht via https://codepen.io/goodbytes/pen/ExjRGGx  
    let storedNotes = JSON.parse(localStorage.getItem("storedItems")) || [];
    storedNotes.forEach(storedItem => {
    let item = new Note(storedItem);
    item.add();
    
      
  });
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