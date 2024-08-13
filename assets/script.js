document.addEventListener("DOMContentLoaded", () => {
  const nextFullYearTemplate = document.querySelector("h2");
  const dayTemplate = document.querySelector(".day .time-value");
  const hourTemplate = document.querySelector(".hour .time-value");
  const minuteTemplate = document.querySelector(".minute .time-value");
  const secondTemplate = document.querySelector(".second .time-value");

  setInterval(() => {
    const currFullYear = new Date();
    const nextFullYearValue = new Date().getFullYear() + 1;
    const nextFullYear = new Date(`January 01 ${nextFullYearValue} 00:00:00`);
    const diff = currFullYear - nextFullYear;

    const daysRemainingValue = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursRemainingValue = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesRemainingValue = Math.floor(diff / 1000 / 60) % 60;
    const secondsRemainingValue = Math.floor(diff / 1000) % 60;

    nextFullYearTemplate.textContent = nextFullYearValue;
    dayTemplate.textContent = String(Math.abs(daysRemainingValue)).padStart(
      2,
      "0"
    );
    hourTemplate.textContent = String(Math.abs(hoursRemainingValue)).padStart(
      2,
      "0"
    );
    minuteTemplate.textContent = String(
      Math.abs(minutesRemainingValue)
    ).padStart(2, "0");
    secondTemplate.textContent = String(
      Math.abs(secondsRemainingValue)
    ).padStart(2, "0");
  }, 1000);
});
