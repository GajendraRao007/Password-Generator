const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let displayPass = document.getElementById("display-pass")
let passBtn = document.getElementById("generatepassword")



passBtn.addEventListener ("click" , function (){

    let strongpass1 = Math.floor (Math.random() * characters.length)
    let strongpass2 = Math.floor (Math.random() * characters.length)
    let strongpass3 = Math.floor (Math.random() * characters.length)
    let strongpass4 = Math.floor (Math.random() * characters.length)
    let strongpass5 = Math.floor (Math.random() * characters.length)
    let strongpass6 = Math.floor (Math.random() * characters.length)
    let strongpass7 = Math.floor (Math.random() * characters.length)
    let strongpass8 = Math.floor (Math.random() * characters.length)
    let strongpass9 = Math.floor (Math.random() * characters.length)
    let strongpass10 = Math.floor (Math.random() * characters.length)
    let strongpass11 = Math.floor (Math.random() * characters.length)
    let strongpass12 = Math.floor (Math.random() * characters.length)
    let strongpass13 = Math.floor (Math.random() * characters.length)
    let strongpass14 = Math.floor (Math.random() * characters.length)
    let strongpass15 = Math.floor (Math.random() * characters.length)


    displayPass.textContent = characters[strongpass1] + characters[strongpass2] + characters[strongpass3]+ characters[strongpass4]+ characters[strongpass5]+ characters[strongpass6]+ characters[strongpass7]+ characters[strongpass8]+ characters[strongpass9]+ characters[strongpass10]+ characters[strongpass11]+ characters[strongpass12]+ characters[strongpass13]+ characters[strongpass14]+ characters[strongpass15]


})