function encrypt(text, s)
    {
        let result=""
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if (char == char.toUpperCase(text[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }
function decrypt(text, s)
{
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
        if (char == char.toUpperCase(text[i]))
        {
            let ch =  String.fromCharCode((char.charCodeAt(0) - s-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) - s-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}
     
// Driver code
let text = "Rishu";
let s = 4;
console.log("Text  : " + text);
console.log("Shift : " + s);
console.log("Cipher Encryption: " + encrypt(text, s));
console.log("Cipher Decryption: " + decrypt(text, s));