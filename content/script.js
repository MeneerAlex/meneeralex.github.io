// loading navbar
document.addEventListener("DOMContentLoaded", function () {
    fetch("/content/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });
});

// loading footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("/content/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});



// age
let birthday = new Date("2/1/2008");

let today = new Date();
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if (months < 0) {
    years--;
    months += 12;
}

let leeftijd = `${years} years, ${months} months and ${days} days`;

document.getElementById("birthday").innerHTML = leeftijd;
//source: https://www.javatpoint.com/calculate-age-using-javascript