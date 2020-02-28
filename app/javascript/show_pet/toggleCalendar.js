export const toggleCalendar = () => {
  const btn = document.querySelector("#view-calendar-btn");
  if (btn) {
    btn.addEventListener('click', () => {
      const calendar = document.querySelector('#calendar-container');
      calendar.classList.toggle('none');
      if (btn.innerText === 'View calendar') {
        btn.innerText = 'Close';
      } else {
        btn.innerText = 'View calendar';
      }
    });
  }
}