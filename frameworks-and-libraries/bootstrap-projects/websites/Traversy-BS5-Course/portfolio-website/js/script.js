// Typing Effect
function runTypingEffect() {
	const text = "I am Alan Webb";
	const typingElement = document.getElementById("typing-text");
	const typingDelay = 250;

	typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingElement.textContent += text.charAt(i);
		}, delay * i);
	}
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
