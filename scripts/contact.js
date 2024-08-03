// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function onClick() {
    // Get the main container HTML element by id
    var contactPageContainer = document.getElementById('contact-page');

    // Create <p> element to show message
    var message = document.createElement('p');
    // Set element text content
    message.textContent = 'Thank you for your message!';
    // Modify .classlist for paragraph element
    message.classList.add('large-text');

    // Replace content of main container
    contactPageContainer.innerHTML = '';
    contactPageContainer.appendChild(message);
}
