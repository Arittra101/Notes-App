console.log("hi");
let abj = [];
shownotes();
//localStorage.removeItem('notes',abj[0]);
document.getElementById("addBtn").addEventListener("click", print);


//printing funtion
function print() {
    note.innerHTML = '<b style="color:green" ">Added</b>';
    onclick = setTimeout(myFunction, 3000);
    console.log("hi click");

    let addTxt = document.getElementById("addTxt");
    let Lnotes = localStorage.getItem("notes");  //lNotes object
    console.log(addTxt.value);
    
    if (Lnotes == null) 
    {
        abj = [];
    }
    else
    {
        abj = JSON.parse(Lnotes);
    }
    if (addTxt.value !="") {
        console.log("e")
        abj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(abj));
        addTxt.value = "";
    }
    shownotes();
}


//local to adj array
function variables_read() {

    
    let Lnote = localStorage.getItem("notes");
    if (Lnote == null)
        abj = [];
    else abj = JSON.parse(Lnote);

}


//container show
function shownotes()
{
    variables_read();
    let html = "";
    abj.forEach(function (element,index) {
        
        html += `  <div class="cards my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
        <h5 class="card-title">Your note ${index+1}</h5>
        <p class="card-text" id=>${element}
         </p>
       
        <a id="${index}" onclick="Delete(this.id)" class="btn btn-primary">Delete Notes</a>
    </div></div>`;
    })
    if (abj.length == 0) {
        notes.innerHTML="Sorry you have no note"  
    }
    else 
    notes.innerHTML = html;
    

}


//onclick function call
function myFunction() {
    note.innerHTML = "Add a note";
    
}

function Delete(index)
{
    abj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(abj));
    shownotes();
}

document.getElementById('search').addEventListener('input',function() {
    
    let search = document.getElementById('search');
    let value = search.value;
    //  console.log(value);
    let cardID = document.getElementsByClassName('cards');
    //  console.log(cardID.children[1]);
    // console.log(value);
    // console.log(typeof cardID);
    let i = 0;
    Array.from(cardID).forEach(function(element) {

       
        let a = element.getElementsByTagName("p")[0].innerText;
        // getElementsByTagName("p")[0].innerText;
        // console.log(a);
        if (a.includes(value))
            element.style.display = "block";
        else element.style.display = "none";
       

    })

    

})
