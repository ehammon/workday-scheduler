let today = moment().format('llll');

$("#currentDay").text(today);

let retrieveLocalStorage  = function() {

    // retrieve inputs from local storage
    let key9 = JSON.parse(localStorage.getItem("storedItem9"));
    $("#hour-9").val(key9);

    let key10 = JSON.parse(localStorage.getItem("storedItem10"));
    $("#hour-10").val(key10);

    let key11 = JSON.parse(localStorage.getItem("storedItem11"));
    $("#hour-11").val(key11);

    let key12 = JSON.parse(localStorage.getItem("storedItem12"));
    $("#hour-12").val(key12);

    let key13 = JSON.parse(localStorage.getItem("storedItem13"));
    $("#hour-13").val(key13);

    let key14 = JSON.parse(localStorage.getItem("storedItem14"));
    $("#hour-14").val(key14);

    let key15 = JSON.parse(localStorage.getItem("storedItem15"));
    $("#hour-15").val(key15);

    let key16 = JSON.parse(localStorage.getItem("storedItem16"));
    $("#hour-16").val(key16);

    let key17 = JSON.parse(localStorage.getItem("storedItem17"));
    $("#hour-17").val(key17);
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


    // save inputs to local storage
    $(".saveBtn").on("click", function(event) {
        event.preventDefault(); 
        //alert("Hi");

        let textarea9 = $("#hour-9").val();
        localStorage.setItem("storedItem9", JSON.stringify(textarea9))

        let textarea10 = $("#hour-10").val();
        localStorage.setItem("storedItem10", JSON.stringify(textarea10))

        let textarea11 = $("#hour-11").val();
        localStorage.setItem("storedItem11", JSON.stringify(textarea11))

        let textarea12 = $("#hour-12").val();
        localStorage.setItem("storedItem12", JSON.stringify(textarea12))

        let textarea13 = $("#hour-13").val();
        localStorage.setItem("storedItem13", JSON.stringify(textarea13))

        let textarea14 = $("#hour-14").val();
        localStorage.setItem("storedItem14", JSON.stringify(textarea14))

        let textarea15 = $("#hour-15").val();
        localStorage.setItem("storedItem15", JSON.stringify(textarea15))

        let textarea16 = $("#hour-16").val();
        localStorage.setItem("storedItem16", JSON.stringify(textarea16))

        let textarea17 = $("#hour-17").val();
        localStorage.setItem("storedItem17", JSON.stringify(textarea17))

    }); 

retrieveLocalStorage();





