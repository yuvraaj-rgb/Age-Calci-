function calculateAge() {
  const xyzInput = document.getElementById("xyz");
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  const a = new Date(xyzInput.value);
  const today = new Date();

  error.textContent = "";
  result.style.display = "none";

  if (!xyzInput.value) {
    error.textContent = "You think I'm Blind.";
    return;
  }

  if (a > today) {
    error.textContent = "You are not from future, you're not Nikola Tesla nor Albert Einstein";
    return;
  }

  let years = today.getFullYear() - a.getFullYear();
  let months = today.getMonth() - a.getMonth();
  let days = today.getDate() - a.getDate();

  // Adjust days
  if (days < 0) {
    months--;

    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  // Adjust months
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;

  result.style.display = "block";
}
