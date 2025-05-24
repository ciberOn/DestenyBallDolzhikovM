const arrVariants = [
    "yes",
    "no",
    "maybe",
    "chocolate",
    "if you try hartd",
    "i can't say directly",
    "Ask another one",
    "i'm not ready",
    "i think another time",
    "it's will be easy",
    "i can not say now",
]

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    const randInt = Math.floor(Math.random() * arrVariants.length)
    alert(arrVariants[randInt])
})
