/*
    Ox at 12306 ... ^_^
*/

var t_search = setInterval(search_ticket, 2000);
var t_book   = setInterval(  book_ticket, 200);
var t_border = setInterval(change_color , 500);

function search_ticket(){
	//var from = document.getElementById("fromStationText");
	//var to   = document.getElementById("toStationText");
	var date = document.getElementById("train_date");
	//var student = document.getElementById("sf2");
	var find1 = document.getElementById("query_ticket");
	var find2 = document.getElementById("a_search_ticket");

	//if(from) from.value = "上海";	//Todo: .click()
	//if(to) to.value = "汕尾";	//Todo: .click()
	if(date) date.value = "2018-02-10";
	//if(student) student.checked = true;
	if(find1) find1.click();
	if(find2) find2.click();
}

function book_ticket(){
	var book = document.getElementsByClassName("btn72")[0];
	if(book) book.click();
}

var time = 0;
function change_color(){
	time++;
	switch(time%3){
	case 0:	document.body.style.border = "10px solid red";break;
	case 1:	document.body.style.border = "10px solid green" ;break;
	case 2:	document.body.style.border = "10px solid blue"   ;break;
	}
}
