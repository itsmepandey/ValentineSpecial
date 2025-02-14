const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'priti';
const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl;
	} else {
		resultDiv.innerHTML = 'Naa , Tum meri bhabhi nhi hoo kon hooo tum..? kaha hai meri pyari Bhabhi';
	}
});