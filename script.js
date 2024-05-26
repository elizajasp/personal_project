
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
        const text = [
            "Hi! You seem stressed.",
            "Let's see if any of these activities",
            "will calm you...",
            "Click one of the three options :)",
        ];
        typeText(text, "popup-text");
    }, 500);
};


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


function typeText(lines, elementId, speed = 50) {
    let lineIndex = 0;
    let charIndex = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; 

    function typeWriter() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                element.innerHTML += lines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, speed);
            } else {
                element.innerHTML += "<br>"; 
                charIndex = 0;
                lineIndex++;
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeWriter();
}