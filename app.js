
document.addEventListener('DOMContentLoaded', () => {
  const currentTime = document.getElementById('currentTime');
  const currentDay = document.getElementById('currentDay');

  function updateTime() {
      const now = new Date();
      const hours = now.getUTCHours().toString().padStart(2, '0');
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      currentTime.textContent = `${hours}:${minutes}:${seconds} UTC`;
  }

  function updateDayOfWeek() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date().getUTCDay();
      currentDay.textContent = days[today];
  }

  setInterval(updateTime, 1000);
  updateDayOfWeek();
});
