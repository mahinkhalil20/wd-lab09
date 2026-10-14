/* write functions that define the action for each event */
function validate() {
	var sid = document.getElementById("sid").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;

	/* Rule 1, check if all required inputs have value */
	if (sid == "" || pwd1 == "" || pwd2 == "" || uname == "" || (!genm && !genf)) {
		alert("All fields are required.");
		return false;
	}

	/* Rule 2, check if the user ID contains an @ symbol */
	if (sid.indexOf("@") < 0) {
		alert("User ID must contain an @ symbol.");
		return false;
	}

		if (sid.indexOf("@") == 0) {
		alert("User ID must contain an @ symbol.");
		return false;
	}


	/* Rule 3, check if password and retype password are the same */
	if (pwd1 != pwd2) {
		alert("Passwords do not match.");
		return false;
	}

	/* Rule 4, check if user name contains only letters and spaces */
	if (!uname.match(/^[a-zA-Z ]+$/)) {
		alert("User name contains symbols.");
		return false;
	}

	return true;
}

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
	var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
	regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;