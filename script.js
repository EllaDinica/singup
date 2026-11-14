let words = [
    "Everything gets easier",
    "Slow is beautiful too",
    "The day still has a chance",
    "Even now, you are moving forward",
    "The world doesn’t end here",
    "Silence heals too",
    "Every breath matters",
    "You will survive this",
    "Light always returns",
    "There is a place for you",
    "Everything has its time",
    "You are closer than it feels",
    "Even small things matter",
    "You are worthy of gentleness",
    "This is just a phase",
    "You are not broken",
    "Your path is yours",
    "And that is enough",
    "You are still here",
    "That is already a victory",
    "Slow is beautiful too",
    "You can pause",
    "Your story continues",
    "Night is not forever",
    "You will keep going",
    "The world is bigger than it seems",
    "You matter more than you think",
    "There is still so much ahead"
];


let pels = document.querySelectorAll(".pel1");
let text = document.querySelector("#text");

pels.forEach(pel =>{
    pel.addEventListener("mouseenter", () => {
        let word = words[Math.floor(Math.random() * words.length)];
        text.textContent = word;
    });
});