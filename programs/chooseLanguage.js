const chooseLanguage = (stringFr, stringEn, divID) => {

    const frenchButton = document.getElementById ("fr");
    const englishButton = document.getElementById ("en");
    const messageDiv = document.getElementById (divID);

    if (!frenchButton || !englishButton || !messageDiv) {
        return;
    }

    // Change the selected button's style.
    const highlightButton = (selectedButton) => {
        frenchButton.classList.remove ("selected");
        englishButton.classList.remove ("selected");

        selectedButton.classList.add ("selected");
    };

    //Default values
    messageDiv.textContent = stringFr;
    highlightButton (frenchButton);

    // Change text and button's CSS class on click.
    englishButton.addEventListener ("click", function () {
        messageDiv.textContent = stringEn;
        highlightButton (englishButton);
    });
    frenchButton.addEventListener ("click", function () {
        messageDiv.textContent = stringFr;
        highlightButton (frenchButton);
    }); 
}