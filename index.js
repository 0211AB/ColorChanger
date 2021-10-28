let hexarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//0-16 RANDOM NUMBER GENERATOR

let random = getRandom();

function getRandom() {

    return Math.floor(Math.random() * 16)
}

let btn = document.getElementById("btn");
let elm = document.getElementById("span");

btn.addEventListener('click', function () {

    //creating a hex code    
    let hexcode = "#";

    for (i = 0; i < 6; i++) {
        hexcode += hexarray[getRandom()];
    }

    document.body.style.backgroundColor = hexcode;
    btn.style.backgroundColor = hexcode;
    elm.textContent=hexcode;
})
