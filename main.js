function openAllPagesByName(name) {
    openUrls(getLinksList(document.getElementsByName(name)));
}

function openLinks() {
    const urls = [
        'https://web.whatsapp.com/', 
        'https://webmailbeta.aruba.it/', 
        'https://app.chime.aws/', 
        'file:///C:/Users/Usai9/Documents/Programmazione/Code/Public/bookmarks.github.io/index.html'
    ];
    openUrls(urls);
}

function openUrls(array) {
    array.forEach(element => {
        window.open(element);
    });
}

function getLinksList(array) {
    var linksList = [];
    array.forEach(element => {
        linksList.push(element.attributes.href.nodeValue);
    });
    return linksList;
}

function dateDiff(date) {
    const currentDate = new Date();
    const parsedDate = new Date(date);
    return [
        currentDate.getFullYear() - parsedDate.getFullYear(),
        currentDate.getMonth() - parsedDate.getMonth(),
        currentDate.getDate() - parsedDate.getDate()
    ];
}

function calculateReminders() {
    const dates = document.getElementsByName("date");
    dates.forEach(d => {
        let end = dateDiff(d.cells[1].innerHTML).map(value => Math.abs(value) < 10 ? "0" + Math.abs(value) : "" + Math.abs(value));
        d.cells[2].innerHTML = `${end[0]} - ${end[1]} - ${end[2]}`;
        if(end[0] + end[1] === "0000" && end[2] <= 7) {
            d.cells[2].style.color = "red";
            d.cells[2].style.fontWeight = "bold";
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("reminders")) calculateReminders();
})

function calcoloMassimale() {
    let kg = document.getElementById("pesoMassimale").value;
    let reps = document.getElementById("repsMassimale").value;
    document.getElementById("resMassimale").innerHTML = Math.round(kg / (1.0278 - (0.0278 * reps)));
}

function calcoloReps() {
    let max = document.getElementById("pesoReps").value;
    let reps = document.getElementById("repsReps").value;
    document.getElementById("resReps").innerHTML = Math.round(max * (1.0 - (reps / 40.0)));
}

function volume() {
    let kg = document.getElementById("pesoVol").value;
    let reps = document.getElementById("repsVol").value;
    document.getElementById("resVol").innerHTML = Math.round(kg * reps);
}

function weightConverter() {
    let weight = document.getElementById("pesoConv").value;
    let type = document.querySelector('input[name="kgToLbs"]:checked').value;
    let factor = type === "kg" ? 1.0 / 2.2046 : 2.2046;
    document.getElementById("resConv").innerHTML = Math.round(weight * factor);
}

function timerStart() {
    let work = document.getElementById("work").value;
    let rest = document.getElementById("rest").value;
    let sets = document.getElementById("sets").value;
    console.log(work, rest, sets)
}