console.log("still working");

const toaddNote_box = document.querySelector(".addNote-box"),
  popup_box = document.querySelector(".popup-box"),
  close_popupByIcon = popup_box.querySelector("header i"),
  toget_title = popup_box.querySelector(".title"),
  toget_desc = popup_box.querySelector("textarea"),
  popup_addnoteBtn = popup_box.querySelector(".popup-addnoteBtn");

// to get localstorage notes if exist and parsing them
// to js object else passing an empty array to notes
const saved_notes = JSON.parse(localStorage.getItem("saved_notes") || "[]");

toaddNote_box.addEventListener("click", () => {
  popup_box.classList.add("show_popup");
  //console.log("working");
});

toaddNote_box.addEventListener("click", () => {
  popup_box.classList.add("show_popup");
  //console.log("working");
});

close_popupByIcon.addEventListener("click", () => {
  popup_box.classList.remove("show_popup");
  // console.log("working");
});

popup_addnoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let note_title = toget_title.value,
    note_desc = toget_desc.value;

  // the main code of this notes app
  if (note_title || note_desc) {
    let getDate = new Date();
    getDate = getDate.toLocaleString("en-GB", { timeZone: "IST" });

    let infoOf_newNotebox = {
      title: note_title,
      desc: note_desc,
      date: getDate,
    };

    // to add new notes
    saved_notes.push(infoOf_newNotebox);

    // saving new note to localestorage
    localStorage.setItem("saved_notes", JSON.stringify(saved_notes));
    close_popupByIcon.click();
    displayNote();
  }
});

// Now fnc() to display new note on screen...
function displayNote(params) {
  // targeting all note boxes
  document.querySelectorAll(".newNote-box").forEach((note) => note.remove());

  saved_notes.forEach((note, index) => {
    // html of new note box
    let list_newNote = `<li class="newNote-box">
                <div class="note-details">
                <p> ${note.title} </p>
                  <span>
                   ${note.desc}
                  </span>
               </div>
               <div class="date-content">
                <span>${note.date}</span>
                <div class="settings">
                <i onClick ="editDeleteMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="menu">
                <li><i onClick ="editNote(${index} ,'${note.title}','${note.desc}')" class="uil uil-pen"></i>Edit</li>
               <li><i onClick ="deleteNote(${index})" class="uil uil-trash"></i>Delete</li>
               </ul>
             </div>
            </div>
           </li>`;
    toaddNote_box.insertAdjacentHTML("afterend", list_newNote);
  });
}
displayNote();

// now code to edit/delete note box by ...
function editDeleteMenu(elem) {
  elem.parentElement.classList.add("showMenu");
  document.addEventListener("click", (e) => {
    // code to remove .showMenu  class from .settings div by click on document
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("showMenu");
    }
  });
}

function deleteNote(noteId) {
  // code to delete selected note from array/notes list
  saved_notes.splice(noteId, 1);
  // code to save updated notes to localstorage
  localStorage.setItem("saved_notes", JSON.stringify(saved_notes));
  displayNote();
}

//{
// i wii work on it after learning DOM

// function editNote(noteId, title, desc) {
//   let newNoteTitle = document.querySelector(".note-details");
//   let gettitleContent = newNoteTitle.getElementsByTagName("p");
//   gettitleContent.innerHtml = "I am shivam";

//   // console.log(noteId, title, desc);
// }

// javascript to search note your box

// const searchNoteBox = (note) => {
// let matchvalue = document.getElementById("searchBox").value.toUpperCase();

// for (let index = 0; index <= saved_notes.length; index++) {
// let titlestr = saved_notes[index].title.toUpperCase();
// if (titlestr === matchvalue) {
// console.log("good to go");
// }
// }

// saved_notes.forEach((notetitle, index) => {
// //   console.log(saved_notes[index].title.toUpperCase().indexOf(matchvalue));
// });
// }
//  }
