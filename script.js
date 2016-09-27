//choc up on click - add to the count and change the number
//choc down on click - subtract from the count and change the number
//do this for all the up and down buttons
	$(".fa-angle-up").click(addCookies);
	$(".fa-angle-down").click(subtractCookies);
	$("#custC").click(customCount);
	$("#custL").click(customCount);
	$("#custS").click(customCount);
	$("#basketItems").hide();
	if(!Cookies.get("sugar")&& !Cookies.get("chocolate") && !Cookies.get("lemon")){
		$("#checkout").hide();
		$("#add").click(addToBasket);
	}else{
		$("#sugars").html("<p>Sugar - x" + Cookies.get("sugar") + "</p>");
		$("#lemons").html("<p>Lemon - x"+Cookies.get("lemon") + "</p>");
		$("#chocolates").html("<p>Chocolate - x"+Cookies.get("chocolate") + "</p>");
		$("#price").html("Total: $"+Cookies.get("total"));
		$("#basketItems").show();
		$("#checkout").show();
		$("#empty").hide();
		$("#add").click(updateBasket);
	}
	
function subtractCookies(){
	var count = whichCookie(event.target.id);
	var countInt = parseInt(count.innerText);
	if(countInt > 0){
		countInt = countInt - 1;
		count.innerText =  countInt;
	}
}
function addCookies(){
	var count = whichCookie(event.target.id);
	var countInt = parseInt(count.innerText);
	countInt = countInt + 1;
	count.innerText =  countInt;

}
function addToBasket(){
	var sug = document.getElementById("sugarCount");
	var choc = document.getElementById("chocCount");
	var lem = document.getElementById("lemCount");
	Cookies.set("sugar",sug.innerText);
	Cookies.set("chocolate",choc.innerText);
	Cookies.set("lemon",lem.innerText);
	$("#sugars").html("<p>Sugar - x" + Cookies.get("sugar") + "</p>");
	$("#lemons").html("<p>Lemon - x"+Cookies.get("lemon") + "</p>");
	$("#chocolates").html("<p>Chocolate - x"+Cookies.get("chocolate") + "</p>");
	var total = (parseInt(Cookies.get("sugar")) + parseInt(Cookies.get("chocolate"))+parseInt(Cookies.get("lemon")))*2;
	console.log(total);
	Cookies.set("total",String(total));
	$("#price").html("Total: $"+String(Cookies.get("total")));
	$("#empty").hide();
	$("#basketItems").show();
	$("#checkout").show();
}
function updateBasket(){
	var sug = document.getElementById("sugarCount");
	var choc = document.getElementById("chocCount");
	var lem = document.getElementById("lemCount");
	if(Cookies.get("sugar")){
		var currentS = parseInt(Cookies.get("sugar")) + parseInt(sug.innerText);
	
	}else{
		var currentS = parseInt(sug.innerText);
	}
	if(Cookies.get("chocolate")){
		var currentC = parseInt(Cookies.get("chocolate")) + parseInt(choc.innerText);
	
	}else{
		var currentC = parseInt(choc.innerText);
	}
	if(Cookies.get("lemon")){
		var currentL = parseInt(Cookies.get("lemon")) + parseInt(lem.innerText);
		
	}else{
		var currentL = parseInt(lem.innerText);;
	}
	Cookies.set("sugar",String(currentS));
	Cookies.set("chocolate",String(currentC));
	Cookies.set("lemon",String(currentL));
	//set the contents = to the type and number of cookies and the total price of each type
	if(currentS> 0){
		$("#sugars").html("<p>Sugar - x" + String(currentS) + "</p>");
	}
	if(currentL > 0){
		$("#lemons").html("<p>Lemon - x"+String(currentL) + "</p>");
	}
	if(currentC > 0){
		$("#chocolates").html("<p>Chocolate - x"+String(currentC) + "</p>");
	}
	//set total to the total added up price of all cookies
	var total = (currentS + currentC +currentL)*2;
	Cookies.set("total",total);
	//make reset cookie function
	$("#price").html("Total: $"+String(total));

}
function whichCookie(targ){
	console.log(targ);
	if (targ == "sugarDown" || targ =="sugarUp" || targ=="custS"){
		return document.getElementById("sugarCount");
	}else if(targ == "chocDown" || targ =="chocUp" || targ=="custC"){
		return document.getElementById("chocCount");
	}else if(targ == "lemDown" || targ =="lemUp" || targ=="custL"){
		return document.getElementById("lemCount");
	}else{
		alert("something's wrong");
	}
}
function resetCookies(){

	Cookies.expire("total");
	Cookies.expire("chocolate");
	Cookies.expire("lemon");
	Cookies.expire("sugar");
	window.location.reload(true);
}
function customCount(){
	var cookie = whichCookie(event.target.id);
	if (cookie == document.getElementById("sugarCount")){
		var num = prompt("Enter the number of Sugar Cookies you would like to add to your cart.");
		if (num == null){
			num = 0;
		}
		cookie.innerText = num;
	}else if(cookie == document.getElementById("chocCount")){
		var num = prompt("Enter the number of Chocolate Cookies you would like to add to your cart.");
		if (num == null){
			num = 0;
		}
		cookie.innerText = num;
	}else if(cookie == document.getElementById("lemCount")){
		var num = prompt("Enter the number of Lemon Cookies you would like to add to your cart.");
		if (num == null){
			num = 0;
		}
		cookie.innerText = num;
	}else{
		alert("something went wrong");
	}

}