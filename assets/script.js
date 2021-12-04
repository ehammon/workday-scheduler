let saveBtn = $("");
let today = moment().format('llll');

$("#currentDay").text(today);

//set color of rows based on current time
function colorRow(time) {
	var planNow = moment(now, "H A");
	var planEntry = moment(time, "H A");
	if (planNow.isBefore(planEntry) === true) {
		return "future";
	} else if (planNow.isAfter(planEntry) === true) {
		return "past";
	} else {
		return "present";
	}
};

//retrieve inputs from local storage
function retrieveLocalStorage () {

} 

let key9 = JSON.parse(localStorage.getItem("storedItem9"));
$("#hour-9").val(key9);


$(".saveBtn").on("click", function(event) {
    event.preventDefault(); 
    alert("Hi");
    let buttonID = $(this).attr("id");


    let input9 = $("#hour-9").val();
    localStorage.setItem("storedItem9", JSON.stringify(input9))

    console.log(input9);
})

retrieveLocalStorage();