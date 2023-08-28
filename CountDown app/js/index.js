const endDate = "15 September 2023 11:59:59 AM";
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const dif = (end - now) / 1000;

    inputs[0].value = Math.floor(dif / (3600 * 24));  // Days
    inputs[1].value = Math.floor((dif / 3600) % 24);  // Hours
    inputs[2].value = Math.floor((dif / 60) % 60);    // Minutes
    inputs[3].value = Math.floor((dif % 3600) % 60);  // Seconds
}

setInterval(clock, 1000);
