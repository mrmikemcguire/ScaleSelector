

const keys = ["A", "Bb", "B", "C", "C#/Db","D", "D#/Eb","E", "F", "F#/Gb", "G#/Ab"];
const tonalCenter = ["major", "minor"];
const modes = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];
const fingerings = ["i-m", "i-a", "m-a"];
const order = ["ascending", "descending"];

let randKey = Math.floor(Math.random() * keys.length);
let randTonalCenter = Math.floor(Math.random() * tonalCenter.length);
let randMode = Math.floor(Math.random() * modes.length);
let randFingering = Math.floor(Math.random() * fingerings.length);
let randOrder = Math.floor(Math.random() * order.length);


document.getElementById("key").innerHTML = keys[randKey];
document.getElementById("tonalCenter").innerHTML = tonalCenter[randTonalCenter];
document.getElementById("mode").innerHTML = modes[randMode];
document.getElementById("fingering").innerHTML = fingerings[randFingering];
document.getElementById("order").innerHTML = order[randOrder];

