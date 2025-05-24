const inputField = document.querySelector("textarea");
const cleanText = document.querySelector("p");
const textCleanBtn = document.querySelector("button");

// textCleanBtn.onclick = () => {
// 	let userInput = inputField.value
// 		.toLowerCase()
// 		.replace(/[^a-z0-9\s]/g, "")
// 		.replace(/\s+/g, " ")
// 		.trim();
// 	cleanText.innerText = userInput;
// };

// OR

textCleanBtn.onclick = () => {
	let userInput = inputField.value.trim();
	if (userInput.split(" ").length > 1) {
		userInput = userInput
			.split(" ")
			.map((value) => value.toLowerCase().replace(/[^a-z0-9]/g, ""))
			.join(" ");
		cleanText.innerText = userInput;
	} else {
		userInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, "");
		cleanText.innerText = userInput;
	}
};
