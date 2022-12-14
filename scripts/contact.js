// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.



var submit = document.getElementById("submit-button");
var contactPage = document.getElementById("contact-page");

submit.addEventListener("click", submitpage);

function submitpage() {
    contactPage.innerHTML = '';
    const text = document.createElement("p");
    text.innerHTML = "Thank you for your message!";
    text.style.textAlign = "center";
    text.style.fontSize = '24px';
    contactPage.append(text);
}


