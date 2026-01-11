function sendData() {
  alert("Your PWA works, Dil Do!");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Update date & time every second
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    now.toLocaleDateString() + " " + now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Core calculation
function calculateDailyGoal() {
  const monthlyGoal = parseFloat(
    document.getElementById("monthlyGoal").value
  );
  const moneySpent = parseFloat(
    document.getElementById("moneySpent").value
  );

  if (isNaN(monthlyGoal) || isNaN(moneySpent)) return;

  const today = new Date();
  const lastDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );

  const daysLeft =
    lastDayOfMonth.getDate() - today.getDate() + 1;

  if (daysLeft <= 0) return;

  const dailyGoal =
    (monthlyGoal - moneySpent) / daysLeft;

  document.getElementById("dailyGoal").textContent =
    dailyGoal.toFixed(2);
}

// Recalculate whenever user types
document.getElementById("monthlyGoal")
  .addEventListener("input", calculateDailyGoal);

document.getElementById("moneySpent")
  .addEventListener("input", calculateDailyGoal);
