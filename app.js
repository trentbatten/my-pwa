function sendData() {
  alert("Your PWA works, Dil Do!");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

<h2 id="datetime"></h2>

<label>
  Monthly Spending Goal ($)
  <input type="number" id="monthlyGoal" maxlength="6" />
</label>

<br><br>

<label>
  Money Spent ($)
  <input type="number" id="moneySpent" maxlength="6" />
</label>

<br><br>

<h3>
  Daily Spending Goal: $
  <span id="dailyGoal">--</span>
</h3>
