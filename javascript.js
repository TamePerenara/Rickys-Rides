// JavaScript Document
alert("JS is attached");
var dailyPrice = 0,
	car, totalPrice = 0

function updateCar() {
	car = this.dataset.name;
	dailyPrice = this.dataset.price;
	alert(car);
	alert(dailyPrice);
	window.scrollTo(0, document.getElementById("carInformation").offsetTop - 40);
	document.getElementById("carOutput").innerHTML = car;
	document.getElementById("priceOutput").innerHTML = dailyPrice;
}

function updateBooking() {
	var addItems = document.getElementsByClassName('addcheck');
	var checkedAddItems = [];
	var addCost = 0
	for (var i = 0; i < addItems.length i++) {
		if (addItems[i].checked) {
			checkedAddItems.push(' ' + addItems[i].value);
			addCost += Number(addItems[i].dataset.price);
		}
	}
	var pickUp = document.getElementById("pickUpDate").value;
	var numberDays = document.getElementById("numberDays").value;
	totalPrice = addCost + dailyPrice * numberDays;
	document.getElementById("dateOutput").innerHTML = pickUp;
	document.getElementById("daysOutput").innerHTML = numberDays;
	document.getElementById("extrasOutput").innerHTML = checkedAddItems;
	document.getElementById("totalPriceOutput").innerHTML = "$" + totalPrice;
}

function checkInputs(numberDays, checkedAddItems, totalPrice, car) {
	// write if statement to check names agasint patterns here !
	var firstName = document.getElementById("firstNameInput").value;
	var lastName = document.getElementById("lastNameInput").value;
	var licenseNumber = document.getElementById("licenseNumberInput").value;
	var email = document.getElementById("emailInput").value;
	alert(firstName + lastName + licenseNumber + email); //test alert   
}
var allInputs = document.getElementsByClassName('addCheck');
for (var i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('input', updateBooking);
}
//event listener that will call the update room function if a card is clicked
var carInputs = document.getElementsByClassName('carCard');
for (i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click', updateCar);
}