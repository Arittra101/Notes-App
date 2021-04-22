console.log("hi");
let abj = [];
let time = [];

let hour, second, minute;


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
  
    dateMaker();
    shownotes();
   
}
//MAKER DATE
function  dateMaker()
{
    let date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    if (hour > 12) {
        hour = Math.abs(12 - hour);
    }
    else if (hour == 0)
        hour = 12;
    
        let date_from_local = localStorage.getItem("date");
        if (date_from_local == null) {
            time = [];
        }
       else 
       {
           time = JSON.parse(date_from_local);
       }
 
    let H_m_s = `${hour} : ${minute} : ${second}`;
    console.log(H_m_s)
    time.push(H_m_s);
    localStorage.setItem("date", JSON.stringify(time));
    console.log(hour)
    console.log(minute)   
     console.log(second) 



}
//local to adj array
function variables_read() {

    
    let Lnote = localStorage.getItem("notes");
    if (Lnote == null)
        abj = [];
    else abj = JSON.parse(Lnote);

    let local_time_array = localStorage.getItem("date");
    if (local_time_array == null)
        time = [];
    else time = JSON.parse(local_time_array);

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
        <h7 class="card-title"><b>Time:</b> ${time[index]}</h7>
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
    time.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(abj));
    localStorage.setItem('date', JSON.stringify(time));
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
