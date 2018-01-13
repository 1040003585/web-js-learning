/*
    Ox at 12306 ... ^_^
*/

// 设置三个不同功能的定时函数setInterval(fun,每隔多久运行fun)
var t_search = setInterval(search_ticket, 1);
var t_book   = setInterval(  book_ticket, 1);
var t_border = setInterval(change_color , 500);

// 车票预订的“查询”函数
function search_ticket(){
	sleep(Math.random()*1000);	// Math.random()
	//var from = document.getElementById("fromStationText");
	//var to   = document.getElementById("toStationText");
	var date = document.getElementById("train_date");
	//var student = document.getElementById("sf2");
	var find1 = document.getElementById("query_ticket");
	//var find2 = document.getElementById("a_search_ticket");

	//if(from) from.value = "上海";	//Todo: .click()
	//if(to) to.value = "汕尾";	//Todo: .click()
	if(date) date.value = "2018-02-11";
	//if(student) student.checked = true;
	if(find1) find1.click();
	//if(find2) find2.click();
}

// 车票“预订”函数
function book_ticket(){
	sleep(Math.random()*10);	// Math.random()
	var book = document.getElementsByClassName("btn72")[0];
	if(book) book.click();
}

// 窗口颜色变换函数
var time = 0;
function change_color(){
	time++;
	switch(time%3){
	case 0:	document.body.style.border = "10px solid red";break;
	case 1:	document.body.style.border = "10px solid green" ;break;
	case 2:	document.body.style.border = "10px solid blue"   ;break;
	}
}

function sleep(numberMillis) { 
	var now = new Date(); 
	var exitTime = now.getTime() + numberMillis; 
	while (true) { 
		now = new Date(); 
		if (now.getTime() > exitTime) 
		return; 
	} 
}
