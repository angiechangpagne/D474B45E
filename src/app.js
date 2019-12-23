


// function sequencer(){
//   const kick = new Tone.Player('./drums/')
// }


let c = new window.AudioContext();
let n = c.createOscillator();
n.frequency.value = 220;
n.connect(c.destination);
n.start(); n.stop(8);

let g = new window.AudioContext();
let r = g.createOscillator();
r.frequency.value = 329.63;
r.connect(g.destination);
r.start(); r.stop(6);

let a = new window.AudioContext();
let l = a.createOscillator();
l.frequency.value = 440;
l.connect(a.destination);
l.start(); l.stop(4);