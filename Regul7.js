const words = "Wonderful Joyful Happiness Time Task Apple"
const pattern = /\b[^Aa\s]{6,}\b/g
const matches = words.match(pattern);
console.log(matches)
