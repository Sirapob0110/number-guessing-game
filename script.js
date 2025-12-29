// filepath: script.js
// ตัวแปรเก็บตัวเลขลับ
let secretNumber = 0;
// ตัวแปรนับจํานวนครั้งที่ทาย.
let attemptCount = 0;
// ฟังก์ชันเริ่มเกมใหม่
function initializeGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;
  timeElapsed = 0;
  updateDisplay();
  updateTimerDisplay();
  startTimer();
}
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");
  // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
 if (guessValue === secretNumber) {
  stopTimer();

  resultContainer.innerHTML = `
  <div class="alert alert-success" role="alert">
    <h5>✓ ถูกต้อง!</h5>
    <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
    <p>ใช้เวลา ${timeElapsed} วินาที</p>
  </div>
  `;

  // ปิด input หลังชนะ
  guessInput.disabled = true;
  return; // ⛔ หยุดการทำงานตรงนี้ทันที
}

  // Validation: ตรวจสอบว่าอยู่ในช่วง 1-100 หรือไม่
  if (guessValue < 1 || guessValue > 100) {
    resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100!
 </div>
 `;
    return;
  }
  attemptCount++; // เพิ่มตรงนี้
  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
  } else if (guessValue > secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-warning" role="alert">
 ↓ ตัวเลขสูงไป
 </div>
 `;
  } else {
    resultContainer.innerHTML = `
 <div class="alert alert-info" role="alert">
 ↑ ตัวเลขตํ่าไป
 </div>
 `;
  }
  updateDisplay();
  guessInput.value = "";
  guessInput.focus();
}
// ฟังก์ชันอัปเดตจํานวนครั้ง
function updateDisplay() {
  const attemptsContainer = document.getElementById("attemptsContainer");
  attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}
// เริ่มเกมเมื่อโหลดหน้า
window.addEventListener("load", initializeGame);
// filepath: script.js
// ...existing code...
// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
  stopTimer();
  initializeGame();

  const guessInput = document.getElementById("guessInput");
  guessInput.disabled = false;
  guessInput.value = "";
  guessInput.focus();

  document.getElementById("resultContainer").innerHTML = "";
}


// ...existing code...
// filepath: script.js
// ...existing code...
// เพิ่มการ select text เมื่อคลิก input
document.addEventListener("DOMContentLoaded", function () {
 const guessInput = document.getElementById("guessInput");
 guessInput.addEventListener("focus", function () {
 this.select();
 });
});

// ...existing code...
// filepath: script.js
// ...existing code...
// เพิ่มการรองรับ Enter key
document.addEventListener("DOMContentLoaded", function () {
 document
 .getElementById("guessInput")
 .addEventListener("keypress", function (event) {
 if (event.key === "Enter") {
 checkGuess();
 }
 });
});
// ...existing code...

let timer = null;
let timeElapsed = 0;
function startTimer() {
  stopTimer(); // ป้องกัน timer ซ้อน
  timer = setInterval(() => {
    timeElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function updateTimerDisplay() {
  const timerContainer = document.getElementById("timerContainer");
  timerContainer.textContent = `เวลา: ${timeElapsed} วินาที`;
}
if (guessValue === secretNumber) {
  stopTimer();
  resultContainer.innerHTML = `
  <div class="alert alert-success" role="alert">
    <h5>✓ ถูกต้อง!</h5>
    <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
    <p>ใช้เวลา ${timeElapsed} วินาที</p>
  </div>
  `;
}
