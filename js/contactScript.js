function checkInput() {
	var email = document.getElementById('txtEmail').value;
	var name = document.getElementById('fullName').value;
	var question = document.getElementById('question').value;
	var natureOfQ = document.getElementsByName('natureOfQ');

	var radioChecked = false;

	for (var i = 0; natureOfQ.length > i; i++) {
		if (natureOfQ[i].checked) {
			radioChecked = true;
			break;
		}
	}

	if (
		name.trim() == '' ||
		email.trim() == '' ||
		!radioChecked ||
		question.trim() == '' ||
		question.trim() == 'Type your question here.'
	) {
		alert('Please enter all the details that are on screen.');
		document.getElementById('questionFrom').action = ''; // this prevents the email from being
		// sent but this has the side effect
		// of refreshing the page
	}
}
