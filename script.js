document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("textarea");
    const hashButton = document.getElementById("hash-button");
    const dehashButton = document.getElementById("dehash-button");
    
    hashButton.addEventListener("click", function() {
        const text = textarea.value;
        const hashingNum = Math.floor(Math.random() * 90) + 1;
        const hashedTextValue = hash(text, hashingNum);
        textarea.value = "";
        textarea.value = hashedTextValue;
    });

    dehashButton.addEventListener("click", function() {
        const text = textarea.value;
        const dehashedTextValue = dehash(text);
        textarea.value = "";
        textarea.value = dehashedTextValue;
    });

    function hash(text, hashingNum) {
        let hashedText = "";
        
        for (let i = 0; i < text.length; i++) {
            const ascii = text.charCodeAt(i);
            const newAscii = ascii + hashingNum * 10;
            hashedText += String.fromCharCode(newAscii);
        }
        
        const hashingCode = (hashingNum < 10) ? "0" + hashingNum : String(hashingNum);
        hashedText += hashingCode;
        
        return hashedText;
    }

    // Dehash the text
    function dehash(text) {
        let dehashedText = "";
        
        const infoHash = getInfo(text);
        
        for (let i = 0; i < text.length; i++) {
            const ascii = text.charCodeAt(i);
            const hashingNum = parseInt(infoHash['hashing_num']);
            const reversedAscii = (ascii - (hashingNum * 10) + 0x110000) % 0x110000;
            
            dehashedText += String.fromCharCode(reversedAscii);
        }
        
        return dehashedText.slice(0, -2);
    }
    
    // Get info about the hash
    function getInfo(hash) {
        const hashingNum = hash.slice(-2);
        
        const info = {
            'len': hash.length - 2,
            'hashing_num': parseInt(hashingNum)
        };
        
        return info;
    }
    
    
});

const tryItOut = document.getElementById("try-it-out")
/* FUNCTONS */

/* Select the content in the textarea */
function selectContent(obj) {
    obj.select();
}

/* focus on the textarea when the try it out is pressed */
tryItOut.addEventListener("click", () => {
    textarea.focus();
})