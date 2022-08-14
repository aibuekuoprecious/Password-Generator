const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
"/"];
function genChar() {
    let ranChar = Math.floor(Math.random() * characters.length)
    return characters[ranChar]
}
const genButton = document.getElementById("genButton");
genButton.addEventListener("click", genPass);
function genPass() {
    let ranPass1 = ""
    let ranPass2 = ""
    for (let i = 0; i < 15; i++) {
        ranPass1 += genChar()
        ranPass2 += genChar()
        document.getElementById("block1").value = ranPass1
        document.getElementById("block2").value = ranPass2
    }
}