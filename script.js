document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("input-text");
    const translateButton = document.getElementById("translate-button");
    const outputBinary = document.getElementById("output-binary");

    translateButton.addEventListener("click", function() {
        const asciiText = inputText.value;
        const binaryText = asciiToBinary(asciiText);
        outputBinary.value = binaryText;
    });

    function asciiToBinary(text) {
        let binaryText = "";
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const binaryChar = char.charCodeAt(0).toString(2).padStart(8, 
"0");
            binaryText += binaryChar + " ";
        }
        return binaryText.trim();
    }
});

function selectContent(obj) {
    obj.select();
}