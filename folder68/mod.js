console.log("this is modiul.js");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

module.exports = {
    avg: average,
    name: "parvez",
    repo: "facebook"
}