function myfun() {
    console.log("i am a function inside lib");
    return private();
}

let a = 10;
function private() {
    return Math.random();
}

// nodejs
module.exports = {
    fn: myfun,
    varName: a
}