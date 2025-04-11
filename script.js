const messages = [
    "You're doing amazing ✨",
    "You matter, always 💖",
    "Smile! You're awesome 😄",
    "One small step is still progress 🚶‍♀️",
    "Your vibe is unmatched 🔥",
    "You’re stronger than you think 💪",
    "Today is a fresh start 🌈"
  ];
  
  function boostMood() {
    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[random];
  }
  