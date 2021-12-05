let saveBtn = $("");
let today = moment().format('llll');

$("#currentDay").text(today);

let retrieveLocalStorage  = function() {
    let key9 = JSON.parse(localStorage.getItem("storedItem9"));
    $("#hour-9").val(key9);
}

//set color of rows based on current time
let now = new Date();
let hour = now.getHours();

for (let i = 9; i < 18; i++) {
    let currentId = "#hour-" + i;
    let currentHourBlock = $(currentId);
    // in the past
    if (i < hour) {
        currentHourBlock.addClass("past");
    }
    // in the future
    else if (i > hour) {
        currentHourBlock.addClass("future");
    }
    //current hour
    else {
        currentHourBlock.addClass("present");
    }
}

//retrieve inputs from local storage


    let textarea9 = $("hour-9").val();
    localStorage.setItem("storedItem9", JSON.stringify(textarea9))

    console.log(textarea9);


    $(".saveBtn").on("click", function(event) {
        event.preventDefault(); 
        //alert("Hi");
        let buttonID = $(this).attr("hour-9");

        
    }); 
retrieveLocalStorage();