function sendData() {
  alert("Your PWA works, Dil Do!");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
