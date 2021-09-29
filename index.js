// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    let newcats = [...cats,"Broom"]
    return newcats
}

function prependCat() {
    let newcats = ["Arnold",...cats]
    return newcats
}

function removeLastCat() {
    let newcats = cats.slice(0,2)
    return newcats
}

function removeFirstCat() {
    let newcats = cats.slice(1,3)
    return newcats
}