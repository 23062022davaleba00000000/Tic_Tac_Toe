// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	// ვქმნით მასივს, სადაც შეინახება id-ები.
	const array1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];
	
	// ვქმნით ცვლადებს, რომლებსაც გამოვიყენებთ input-ებთან მუშაობის დროს.
	
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {

		for (let i=3;i<array1.length; i++){
		
		document.getElementById(array1[i]).disabled = true;
		}
//თუ b1, b2 და b3 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.

/*
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/
		window.alert("X მოთამაშემ მოიგო");
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {

	
	for (let i=1;i<array1.length; i++){
		
		document.getElementById(array1[i]).disabled = true;
	    if (array1[i] == "b4") continue;
	}
//თუ b1, b4 და b7 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.

	/*	document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/
		window.alert("X მოთამაშემ მოიგო");
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {

	
	for (let i=0;i<6; i++){
		
		document.getElementById(array1[i]).disabled = true;
}
//თუ b7, b8 და b9 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.
		
/*		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
*/			
        window.alert("X მოთამაშემ მოიგო");
}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		
		for (let i=0;i<8; i++){
		
		document.getElementById(array1[i]).disabled = true;
        
		if(array1[i] == "b3" || array1[i] == "b6") continue;
}
//თუ b3, b6 და b9 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.

/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
*/	
	window.alert("X მოთამაშემ მოიგო");
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		
		for (let i=1;i<8; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b5") continue;
}
//თუ b1, b5 და b9 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.

/*		
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
*/	
	window.alert("X მოთამაშემ მოიგო");
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		
	    for (let i=0;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b3" || array1[i] == "b5" || array1[i] == "b7") continue;
}
//თუ b3, b5 და b7 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.
		
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/		
		window.alert("X მოთამაშემ მოიგო");
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		
		
	    for (let i=0;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b2" || array1[i] == "b5" || array1[i] == "b8") continue;
}	
//თუ b2, b5 და b8 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.	
		
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;		
*/		
		window.alert("X მოთამაშემ მოიგო");
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		
	    for (let i=0;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b4" || array1[i] == "b5" || array1[i] == "b6") continue;
}	
//თუ b4, b5 და b6 ველებში x დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
				
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/		
		window.alert("X მოთამაშემ მოიგო");
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		
	    for (let i=3;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;        
}	
//თუ b1, b2 და b3 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		

/*		
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/		
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		
	    for (let i=1;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b4" || array1[i] == "b7") continue;
}			
//თუ b1, b4 და b7 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		

/*		
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/		
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		
	    for (let i=0;i<6; i++){
		
		  document.getElementById(array1[i]).disabled = true;
}	
//თუ b7, b8 და b9 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		
		
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
*/		
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		
	    for (let i=0;i<8; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b3" || array1[i] == "b6") continue;
}	
//თუ b3, b6 და b9 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		
		
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
*/		
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		
	    for (let i=1;i<8; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b5") continue;
}	
//თუ b1, b5 და b9 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		
/*		
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
*/		
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		
	    for (let i=0;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b3" || array1[i] == "b5" || array1[i] == "b7") continue;
}	
//თუ b3, b5 და b7 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		
		
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		
	    for (let i=0;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b2" || array1[i] == "b5" || array1[i] == "b8") continue;
}	
//თუ b2, b5 და b8 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		
/*		
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
*/		
		window.alert("0 მოთამაშემ მოიგო");
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		
	    for (let i=0;i<array1.length; i++){
		
		  document.getElementById(array1[i]).disabled = true;
        
		  if(array1[i] == "b4" || array1[i] == "b5" || array1[i] == "b6") continue;
}	
//თუ b4, b5 და b6 ველებში 0 დასმულია, დანარჩენ ველებთან წვდომა იზღუდება.		
		
		
/*	
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
*/		
        window.alert("0 მოთამაშემ მოიგო");
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "ყაიმი";
			window.alert('ყაიმი');
	}
	
//თუ ვერც ერთმა მოთამაშემ ვერ მოიგო, მაშინ შესაბამისი შეტყობინება მიიღება.		



	

}

//თუ ერთ-ერთმა მოთამაშემ მოიგო, შესაბამასი შეტყობინება მიიღება.	


// Function to reset game

// 

function myfunc_2() {
	location.reload();
	
	for (let i=0;i<array1.length; i++){
	document.getElementById(array1[i]).value = '';}

/*	
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
*/
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0

// ეს ფუნქციები ამოწმებენ იმას, თუ რომელი მოთამაშეს რიგია, და სმავს შესაბამის უჯრედში X-ს ან 0-ს.
// ამის შემდეგ უჯრედთან წვდომა იზღუდება.

flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true; 
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}

</script>